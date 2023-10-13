import { SignInClient } from "../../components/AuthForm/SignInClient";
import { WelcomeSection } from "../WelcomePage/WelcomPage.styled";
const LoginPage = () => {
  return (
    <WelcomeSection>
      <SignInClient />
    </WelcomeSection>
  );
};

export default LoginPage;
