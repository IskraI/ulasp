import { useLocation } from "react-router-dom";
import {
  ErrorText,
  Title,
  ReportForm,
  ReportFormField,
  ReportFormLabel,
  ReportFormInput,
} from "./ReportUser.styled";
import TabNavigation from "../../TabNavigation/TabNavigation";
import { useForm } from "react-hook-form";

const AnalyticUser = () => {
  const location = useLocation();
  const { user } = location.state;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    // defaultValues: { name: '', email: '', password: '' },
  });
  const onFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <TabNavigation pathtext={false} />
      <Title>Звіт по користувачу {user._id}</Title>
      <ReportForm onSubmit={handleSubmit(onFormSubmit)}>
        Звіт
        <ReportFormField>
          <ReportFormLabel>З</ReportFormLabel>
          <ReportFormInput
            type="text"
            placeholder="дата"
            aria-describedby="dateOfAccessTooltip"
            className={`${errors.dateOfAccess ? "invalid" : ""}${
              !errors.dateOfAccess && dirtyFields.dateOfAccess ? "valid" : ""
            }`}
            {...register("dateOfAccess")}
          />
        </ReportFormField>
        <ReportFormField>
          <ReportFormLabel>по </ReportFormLabel>
          <ReportFormInput
            type="text"
            placeholder="дата"
            aria-describedby="lastPayTooltip"
            className={`${errors.lastPay ? "invalid" : ""}${
              !errors.lastPay && dirtyFields.lastPay ? "valid" : ""
            }`}
            {...register("lastPay")}
          />
        </ReportFormField>
      </ReportForm>
      <ErrorText>Сторінка в розробці</ErrorText>;
    </>
  );
};

export default AnalyticUser;
