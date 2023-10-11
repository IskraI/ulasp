import Footer from "../../components/Footer/Footer";
import {
  WelcomeTitle,
  WelcomeText,
 
} from "./WelcomPage.styled";
import { StyledButton } from "../../components/AuthForm/SignInClient.styled";

const WelcomePage = () => {
  return (
    <>
      <WelcomeTitle>УЛАСП 
        <span style={{
          color: "#FFF3BF",
    fontFamily: "Inter",
    fontSize: "17px",
    fontStyle: "normal",
    fontWeight: 400,
          lineHeight: "normal",
         display: "block",}}>Streem Music</span>
         </WelcomeTitle>
          <WelcomeText>
           Зручний інструмент для Вашого бізнесу!<span style={{ color: "#FFF3BF",
    fontFamily: "Inter",
    fontSize: "17px",
    fontStyle: "normal",
    fontWeight: 400,
          lineHeight: "normal",
     display: "block" ,   }}>Ліцензійна музика.</span>
      </WelcomeText>
      <StyledButton type="submit" >
            Вхід
          </StyledButton>
      <Footer />
    </>
  );
};

export default WelcomePage;
