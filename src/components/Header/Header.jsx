// import { BASE_URL } from  "./constants/constants.js"
import { Link } from "react-router-dom";
import { PageHeader, PageLogo, AvatarHeader } from "./Header.styled";
import pageLogoPath from "../../images/logo.png";

const BASE_URL = `http://localhost:8000`;



const Header = ({avatarURL}) => {

 
  const defaultAvatarSrc = "../avatar.jpg";
  const avatarSrc = avatarURL
      ?  `${BASE_URL}/${avatarURL}`
      : defaultAvatarSrc;

    

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
   
        </>)}
        {/* </AvatarHeader> */}

    </PageHeader>
  );
};

export default Header;
