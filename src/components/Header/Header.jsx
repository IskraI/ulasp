// import { BASE_URL } from  "./constants/constants.js"
import { Link } from "react-router-dom";
import { PageHeader, PageLogo, AvatarHeader } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";
const BASE_URL = `http://localhost:8000`;
import { useUpdateUserAvatarMutation } from "../../redux/authSlice/";
import { useRef, useState } from "react";


const Header = ({avatarURL}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dispatch, { isLoading }] = useUpdateUserAvatarMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("avatarURL", selectedImage);

    dispatch(formData)
      .unwrap()
      .then(() => {
        console.log("Your profile has been updated", "success");
      })
      .catch((e) => console.log(e.data.message));
  };

  const handleChooseIcon = (event) => {
    setSelectedImage(event.target.files[0]);
  };


  const defaultAvatarSrc = "../avatar.jpg";

  const avatarSrc = avatarURL
    ? selectedImage
      ? URL.createObjectURL(selectedImage)
      : `${BASE_URL}/${avatarURL}`
    : defaultAvatarSrc;

  console.log('user', avatarURL)

  return (
    <PageHeader>

      <Link to="/"> 
        <PageLogo src={pageLogoPath} width={50} />
      </Link>
      {/* <AvatarHeader> */}
    {avatarURL && (
    <><AvatarHeader
        src={
          avatarSrc
        }
        alt="Avatar"
        style={{
          display: "block",
          width: "50px",
          height: "50px",
          borderRadius: "50px",
          // background: `url(${avatarURL}) lightgray 50% / cover no-repeat`,
      
        }}
      />
      <form onSubmit={handleFormSubmit}>
         <input
          name="name"
          type="file"
          accept="image/*"
          disabled={isLoading}
          onChange={handleChooseIcon}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "<LoadingSpinner size={30} />" : "Save changes"}
        </button>
      </form>
        </>)}
        {/* </AvatarHeader> */}

    </PageHeader>
  );
};

export default Header;
