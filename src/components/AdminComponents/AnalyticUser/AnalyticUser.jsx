import { ErrorText, Title } from "./AnalyticUser.styled";
import TabNavigation from "../../TabNavigation/TabNavigation";

const AnalyticUser = () => {
  return (
    <>
      <TabNavigation pathtext={false} />
      <Title>Звіт по користувачу </Title>
      <ErrorText>Сторінка в розробці</ErrorText>;
    </>
  );
};

export default AnalyticUser;
