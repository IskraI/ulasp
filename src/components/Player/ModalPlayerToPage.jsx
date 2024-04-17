import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { setNextPage } from "../../redux/playerSlice";

import { Modal } from "../Modal/Modal";

import { Button } from "../Button/Button";

import { ModalInfoText } from "../Modal/Modal.styled";

const ModalPlayerToPage = ({ onClose, moveToPage, isReplacedToPage }) => {
  const dispatch = useDispatch();

  const handleClickYes = () => {
    dispatch(setNextPage({ currentPage: moveToPage }));
    isReplacedToPage();
    onClose();
  };
  return (
    <Modal
      width={"45vw"}
      padding={"12px"}
      borderColor={"#FFF3BF"}
      borderStyle={"solid"}
      borderWidth={"1px"}
      showCloseButton={true}
      onClose={onClose}
      flexDirection={"column"}
    >
      <ModalInfoText
        fontSize={"20px"}
        paddingTop={"0px"}
        paddingBottom={"16px"}
      >
        Поточня пісня відтепер на {moveToPage} сторінці
        <br />
        Перейти на сторінку?
      </ModalInfoText>
      <div style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
        <Button text={"Так"} padding={"10px"} onClick={handleClickYes} />
        <Button text={"Ні"} padding={"10px"} onClick={onClose} />
      </div>
    </Modal>
  );
};

ModalPlayerToPage.propTypes = {
  moveToPage: PropTypes.number,
  onClose: PropTypes.func,
  isReplacedToPage: PropTypes.func,
};

export default ModalPlayerToPage;
