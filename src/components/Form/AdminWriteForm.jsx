import { useForm } from 'react-hook-form';

export const AdminWriteForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Отправлено:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
              <input {...register('Тема')}
        placeholder="Тема"      />
      </label>
      <br />
      <label>
              <input {...register('Текст')}
              placeholder="Текст" />
              
      </label>
      <br />
      <button type="submit">Відправити</button>
    </form>
  );
};

