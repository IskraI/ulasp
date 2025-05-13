import { useEffect, useState } from 'react';

import {
  WelcomeTitle,
  WelcomeText,
  SignInNavLink,
  WelcomeSection,
  WelcomeSubTitle
} from './WelcomPage.styled';

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
    <WelcomeSection>
      <WelcomeTitle>
        УЛАСП
        <WelcomeSubTitle>Stream Music</WelcomeSubTitle>
      </WelcomeTitle>
      <WelcomeText>
        Зручний інструмент для Вашого бізнесу!
        <WelcomeSubTitle>Ліцензійна музика.</WelcomeSubTitle>
      </WelcomeText>

      <SignInNavLink to="/signin">Увійти</SignInNavLink>
    </WelcomeSection>

  );
};

export default WelcomePage;
