import { useForm } from 'react-hook-form';

export const ActForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Запрос отправлен:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
              <input {...register('Акт')}
        placeholder="Прошу зробити акт звірки по номеру договора № 28948749"      />
      </label>
      
      <button type="submit">Запросити</button>
    </form>
  );
};