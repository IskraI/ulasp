import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { useCountListensForUserByIdMutation } from "../../redux/dataUsersSlice";
import { getQuarterRange } from "../../helpers/helpers";
import { Modal } from "../Modal/Modal";
import { TextModal } from "../Modal/Modal.styled";
import { ErrorText } from "../ReportUser/ReportUser.styled";
import ReportFormDataTemplate from "./FormForReport";
import { ReportModal } from "../Modal/Modal.styled";
import { ButtonPrint } from "../AdminComponents/ButtonPrint/ButtonPrint";
import ReportUserTable from "../ReportUser/ReportUserTable";
import { ExportToExcel } from "../ReportUser/ExportToXls";

export const ReportForm = ({ user, userpage }) => {
  const [responseData, setResponseData] = useState([]);
  const [date, setDate] = useState({});
  const { id } = useParams();
  const idUser = userpage ? user.id : id;

  const [selectedOption, setSelectedOption] = useState("date");
  const handleSelectedOptionChange = (newSelectedOption) => {
    setSelectedOption(newSelectedOption); // обновляем selectedOption внутри ReportUser
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
    setError,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onFormSubmit = (data) => {
    let formData;

    if (selectedOption === "date") {
      formData = {
        dateOfStart: data.dateOfStart,
        dateOfEnd: data.dateOfEnd,
        userId: idUser,
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
        userId: idUser,
      };
    }

    dispatchCountListensForUser(formData)
      .unwrap()
      .then((responseData) => {
        setResponseData(responseData);
        handleShowModal("successReport");
        // reset();
        // console.log("responseData :>> ", responseData);
      })
      .catch((error) => {
        let errorMessage = error.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal("error");
      });
  };

  const [activeModal, setActiveModal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); //сповіщення про помилку для модального вікна

  const handleShowModal = (modalContent) => {
    document.body.classList.add("modal-open");
    setActiveModal(modalContent);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setActiveModal(null);
  };

  //
  // const currentDate = new Date()
  //   .toLocaleDateString("en-GB")
  //   .split("/")
  //   .reverse()
  //   .join("-");

  const componentRef = useRef();
  return (
    <>
      <ReportFormDataTemplate
        titleText={userpage ? "Звіт" : undefined}
        handleSubmit={handleSubmit(onFormSubmit)}
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
        isValid={isValid}
        setError={setError}
        control={control}
        getValues={getValues}
        onSelectedOptionChange={handleSelectedOptionChange}
        reset={reset}
      />
      {activeModal === "successReport" && userpage && (
        <>
          {responseData?.length === 0 ? (
            <Modal
              width={"30vw"}
              // height={"90vh"}
              padding={"44px 64px 44px 24px"}
              onClose={handleCloseModal}
              showCloseButton={true}
              flexDirection="row"
            >
              <ErrorText>
                Bикористаних Об’єктів суміжних прав та Об’єктів авторского права
                за обраний період немає
              </ErrorText>
            </Modal>
          ) : (
            <Modal
              // width={"664px"}
              height={"90vh"}
              // padding={"44px 64px 44px 24px"}
              onClose={handleCloseModal}
              showCloseButton={true}
              flexDirection="row"
            >
              <ReportModal>
                <div>
                  {responseData && (
                    <ButtonPrint targetComponent={componentRef} />
                  )}
                  {responseData && (
                    <ExportToExcel
                      data={responseData}
                      fileName={user.contractNumberDoc}
                      date={date}
                      user={user}
                    />
                  )}
                </div>

                <ReportUserTable
                  data={responseData}
                  date={date}
                  user={user}
                  ref={componentRef}
                />
              </ReportModal>
            </Modal>
          )}
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
