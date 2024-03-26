import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";

import { useCountListensForUserByIdMutation } from "../../redux/dataUsersSlice";
import { getQuarterRange } from "../../helpers/helpers";
import { Modal } from "../Modal/Modal";
import ReportFormDataTemplate from "../Form/FormForReport";
import { ReportModal } from "../Modal/Modal.styled";
import { ButtonPrint } from "../AdminComponents/ButtonPrint/ButtonPrint";
import ReportUserTable from "../AdminComponents/ReportUser/ReportUserTable";
export const ReportForm = ({ user }) => {
  const [date, setDate] = useState({});
  const [responseData, setResponseData] = useState([]);
  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState(""); //сповіщення про помилку для модального вікна

  const handleShowModal = (modalContent) => {
    document.body.classList.add("modal-open");
    setActiveModal(modalContent);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };
  const [
    dispatchCountListensForUser,
    { isLoading: isLoadingCountListensForUser },
  ] = useCountListensForUserByIdMutation();

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
    let formData;

    if (selectedOption === "date") {
      formData = {
        dateOfStart: data.dateOfStart,
        dateOfEnd: data.dateOfEnd,
        userId: user.id,
      };

      setDate({ ...data, quarterDate: "", quarterYearDate: "" });
    } else {
      const { formattedStartDate, formattedEndDate } = getQuarterRange(
        parseInt(data.quarterDate),
        parseInt(data.quarterYearDate)
      );
      setDate({ ...data, dateOfStart: "", dateOfEnd: "" });
      formData = {
        dateOfStart: formattedStartDate,
        dateOfEnd: formattedEndDate,
        userId: user.id,
      };
    }

    dispatchCountListensForUser(formData)
      .unwrap()
      .then((responseData) => {
        setResponseData(responseData);
        handleShowModal("successReport");
        // console.log("responseData :>> ", responseData);
      })
      .catch((error) => {
        let errorMessage = error.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal("error");
      });
  };
  //
  // const currentDate = new Date()
  //   .toLocaleDateString("en-GB")
  //   .split("/")
  //   .reverse()
  //   .join("-");

  const [selectedOption, setSelectedOption] = useState("date");

  const handleSelectedOptionChange = (newSelectedOption) => {
    setSelectedOption(newSelectedOption); // обновляем selectedOption внутри ReportUser
  };

  const componentRef = useRef();
  return (
    <>
      <ReportFormDataTemplate
        titleText={"Звіт"}
        handleSubmit={handleSubmit(onFormSubmit)}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        isValid={isValid}
        onSelectedOptionChange={handleSelectedOptionChange}
      />
      {activeModal === "successReport" && (
        <>
          <Modal
            // width={"664px"}
            height={"90vh"}
            // padding={"44px 64px 44px 24px"}
            onClose={handleCloseModal}
            showCloseButton={true}
            flexDirection="row"
          >
            <ReportModal>
              <ButtonPrint targetComponent={componentRef} />

              <ReportUserTable
                data={responseData}
                date={date}
                user={user}
                ref={componentRef}
              />
            </ReportModal>
          </Modal>
        </>
      )}
      {activeModal === "error" && (
        <Modal
          width={"520px"}
          padding={"24px"}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};
