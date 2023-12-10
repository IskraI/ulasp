import {
  UserName,
  ProfileAvatar,
  ProfileAvatarWrapper,
} from "./Profile.styled";

import { getUserState } from "../../redux/userSelectors";
import { useSelector } from "react-redux";

import { useUpdateClientAvatarMutation } from "../../redux/authClientSlice/";
import { useUpdateAdminAvatarMutation } from "../../redux/authSlice/";
import { useEffect, useRef, useState } from "react";
import FileUpload from "../FIleUpload/FIleUpload";

const BASE_URL = `http://localhost:8000`;

export const Profile = () => {
  const user = useSelector(getUserState);

  const { firstName, lastName, fatherName, avatarURL, userRole } = user;

  //для смены аватар
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatchAdmin, { isLoading: isLoadingAdmin }] =
    useUpdateAdminAvatarMutation();
  const [dispatchClient, { isLoading: isLoadingUser }] =
    useUpdateClientAvatarMutation();

  const handleFormSubmit = () => {
 
    const formData = new FormData();

    if (!selectedImage) {
      return;
    }

    formData.append("avatarURL", selectedImage);

    if (userRole) {
      dispatchClient(formData)
        .unwrap()
        .then(() => {
          console.log("Your profile has been updated", "success");
        })
        .catch((e) => console.log(e.data.message));
    } else {
      dispatchAdmin(formData)
        .unwrap()
        .then(() => {
          console.log("Your profile has been updated", "success");
        })
        .catch((e) => console.log(e.data.message));
    }
  };

  useEffect(() => handleFormSubmit(), [selectedImage]);

  const handleChooseIcon = (event) => {
    let file;

    if (event.target.files[0] !== undefined) {
      file = event.target.files[0];
    }
    if (file) {
      setSelectedImage(file);
    }
  };

  const defaultAvatarSrc = "../avatar.jpg";

  const avatarSrc = selectedImage
    ? URL.createObjectURL(selectedImage):avatarURL?
     `${BASE_URL}/${avatarURL}` : defaultAvatarSrc;
  

  return (
    <>
      <form>
        <ProfileAvatarWrapper>
          <FileUpload
            selectedImage={""}
            setSelectedImage={setSelectedImage}
            accept="image/*"
            change={handleChooseIcon}
            saveChanges={handleFormSubmit}
          >
            <ProfileAvatar src={avatarSrc} alt="Avatar" />
          </FileUpload>
        </ProfileAvatarWrapper>
      </form>

      <UserName>
        {lastName && `${lastName}${" "}`}
        {firstName && `${firstName.slice(0, 1)}${"."}`}
        {fatherName && fatherName.slice(0, 1)}
      </UserName>
    </>
  );
};
