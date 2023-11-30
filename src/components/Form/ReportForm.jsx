import { useForm } from 'react-hook-form';

export const ReportForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Отчет создан:', data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Звіт:</h3>
      <label>З
              <input {...register('Дата')}
        placeholder="Дата"      />
      </label>
           <label>по:
              <input {...register('Дата')}
              placeholder="Дата" />
              
      </label>
          <br />
          <label>За
              <input {...register('З')}
              placeholder="З" />
              
      </label>
      <br />
      <button type="submit">Сформувати</button>
    </form>
  );
};