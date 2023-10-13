import { SignInAdminAndEditor } from "../../components/AuthForm/SignInAdminAndEditor";
import { WelcomeSection } from "../WelcomePage/WelcomPage.styled";

const AdminLoginPage = () => {
  return (
    <WelcomeSection>
      <SignInAdminAndEditor />
    </WelcomeSection>
  );
};

export default AdminLoginPage;
