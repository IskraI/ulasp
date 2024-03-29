import { useEffect, useState } from "react";

import {
  WelcomeTitle,
  WelcomeText,
  SignInNavLink,
  WelcomeSection,
} from "./WelcomPage.styled";

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
      document.body.classList.add("animation-end");
    } else {
      document.body.classList.remove("animation-end");
    }
  }, [animationEnd]);

  return (
    <WelcomeSection>
      <WelcomeTitle>
        УЛАСП
        <p
          style={{
            color: "#FFF3BF",
            fontFamily: "Inter",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            // display: "block",
          }}
        >
          Streem Music
        </p>
      </WelcomeTitle>
      <WelcomeText>
        Зручний інструмент для Вашого бізнесу!
        <p
          style={{
            color: "#FFF3BF",
            fontFamily: "Inter",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            // display: "block",
          }}
        >
          Ліцензійна музика.
        </p>
      </WelcomeText>

      <SignInNavLink to="/signin">Увійти</SignInNavLink>
    </WelcomeSection>
  );
};

export default WelcomePage;
