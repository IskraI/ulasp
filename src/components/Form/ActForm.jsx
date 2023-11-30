import { useForm } from 'react-hook-form';
import { TitleThird, FormInput, Button } from './AdminWriteForm.styled';

export const ActForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Запрос отправлен:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitleThird>Запросити акт звірки:</TitleThird>
                   <FormInput {...register('Акт')} />
          
      <Button type="submit">Запросити</Button>
    </form>
  );
};