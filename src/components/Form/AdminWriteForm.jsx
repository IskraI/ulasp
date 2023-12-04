import { useForm } from 'react-hook-form';
import { AdminForm, FormInput1, FormInput2, Button, TitleThird} from './AdminWriteForm.styled'

export const AdminWriteForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Отправлено:', data);
  };

  return (
    <AdminForm onSubmit={handleSubmit(onSubmit)}>
      <TitleThird>Написати адміністратору:</TitleThird>
                   <FormInput1 {...register('Тема')}
        placeholder="Тема"      />
            <br />
                    <FormInput2 {...register('Текст')}
              placeholder="Текст" />
            <br />
      <Button type="submit">Відправити</Button>
    </AdminForm>
  );
};

