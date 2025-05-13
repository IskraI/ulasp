import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { TextModal } from '../Modal/Modal.styled';
import {
  AdminForm,
  FormInput1,
  Textarea,
  // Button,
  TitleThird
} from './AdminWriteForm.styled';
import { useSendMailUserToAdminMutation } from '../../redux/dataUsersSlice';

export const AdminWriteForm = ({ user }) => {
  const { control, register, handleSubmit, setValue } = useForm();
  const [dispatchSendMail, { isLoading: isLoadingSendMail }] =
    useSendMailUserToAdminMutation();
  const subjectValue = useWatch({
    control,
    name: 'subject',
    defaultValue: ''
  }).trim();

  const textValue = useWatch({
    control,
    name: 'text',
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
        handleShowModal('sendmail');
        setValue('text', '');
        setValue('subject', '');
      })
      .catch((e) => {
        let errorMessage = e.data?.message;
        setErrorMessage(errorMessage);
        handleShowModal('error');
      });
    console.log('Отправлено:', formData);
  };
  const [activeModal, setActiveModal] = useState(null); //после успешного добавления спрашиваем добавить ли еще
  const [errorMessage, setErrorMessage] = useState('');

  const handleShowModal = (modalContent) => {
    console.log('modalContent', modalContent);
    setActiveModal(modalContent);
  };
  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setActiveModal(null);
  };
  return (
    <>
      <AdminForm onSubmit={handleSubmit(onSubmit)}>
        <TitleThird>Написати адміністратору:</TitleThird>
        <FormInput1
          {...register('subject')}
          placeholder="Тема"
          maxLength={'100'}
        />

        <Textarea
          {...register('text')}
          placeholder="Текст"
          marginTop={'25px'}
          height={'145px'}
        />

        <Button
          type="submit"
          padding="8px 44px"
          height="48px"
          text="Відправити"
          showIcon={false}
          margintop="24px"
          marginleft="auto"
          disabled={!subjectValue || !textValue}
        ></Button>
      </AdminForm>
      {activeModal === 'sendmail' && (
        <Modal
          width={'520px'}
          padding={'44px 24px'}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>Лист адміністратору відправлено</TextModal>

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
