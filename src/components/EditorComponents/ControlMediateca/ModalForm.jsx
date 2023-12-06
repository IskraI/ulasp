import { Button } from "../../Button/Button";

import { FormControlModal, InputControlModal } from "./ModalForm.styled";

const ModalForm = ({ handleSubmit, idInput, placeholder }) => {
  return (
    <>
      <FormControlModal autoComplete="off" onSubmit={handleSubmit}>
        <InputControlModal type="text" id={idInput} placeholder={placeholder} />
        <Button
          type="Submit"
          text={"Створити"}
          width="198px"
          display="none"
          fontsize="24px"
          padding="8px"
          marginleft={"auto"}
          marginbottom={"28px"}
        />
      </FormControlModal>
    </>
  );
};

export default ModalForm;
