import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { TitleThird, FormInput, Textarea } from './AdminWriteForm.styled';
import { useSendMailUserForActByIdMutation } from '../../redux/dataUsersSlice';
import { Modal } from '../Modal/Modal';
import { TextModal } from '../Modal/Modal.styled';
export const ActForm = ({ user }) => {
  const { control, register, handleSubmit, setValue } = useForm();
  const [dispatchSendMail, { isLoading: isLoadingSendMail }] =
    useSendMailUserForActByIdMutation();

  const textValue = useWatch({
    control,
    name: 'actText',
    defaultValue: ''
  }).trim();
  const onSubmit = (data) => {
    const formData = {
      ...data,
      id: user.id
    };

    dispatchSendMail(formData)
      .unwrap()
      .then(() => {
        handleShowModal('sendact');
        setValue('actText', '');
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal('error');
      });
  };
  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState('');
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
  };
  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setActiveModal(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleThird>Запросити акт звірки:</TitleThird>
        <Textarea
          type="text"
          placeholder="Текст для запиту (період, примітки, тощо)"
          {...register('actText')}
        />

        <Button
          type="submit"
          padding="8px 44px"
          height="48px"
          text="Запросити"
          showIcon={false}
          margintop="24px"
          marginleft="auto"
          disabled={!textValue}
        ></Button>
      </form>

      {activeModal === 'sendact' && (
        <Modal
          width={'520px'}
          padding={'44px 24px'}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Запрос на акт звірки відправлено</TextModal>

          <Button
            type="button"
            padding="8px 44px"
            height="48px"
            text="Ок"
            showIcon={false}
            margintop="24px"
            onClick={handleCloseModal}
          />
        </Modal>
      )}
      {activeModal === 'error' && (
        <Modal
          width={'520px'}
          padding={'24px'}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <TextModal> {errorMessage}</TextModal>
        </Modal>
      )}
    </>
  );
};
