import { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";

import {
  WelcomeTitle,
  WelcomeText,
 } from "./WelcomPage.styled";

import { StyledButton } from "../../components/AuthForm/SignInClient.styled";



const WelcomePage = () => {
const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    const animationDuration = 500; 
    setTimeout(() => {
      setAnimationEnd(true);
    }, animationDuration);
  }, []);

  useEffect(() => {
    if (animationEnd) {
      document.body.classList.add('animation-end');
    } else {
      document.body.classList.remove('animation-end');
    }
  }, [animationEnd]);

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
