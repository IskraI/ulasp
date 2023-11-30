import { useForm } from 'react-hook-form';
import { TitleThird, ReportFormContainer, Button, InputContainer, Input, Label } from './ReportForm.styled';

export const ReportForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Отчет создан:', data);
  };

  return (
      <ReportFormContainer onSubmit={handleSubmit(onSubmit)}>
      <TitleThird>Звіт:</TitleThird>
      <InputContainer>
      <Label>З
              <Input {...register('Дата')}
        placeholder="Дата"      />
      </Label>
           <Label>по:
              <Input {...register('Дата')}
              placeholder="Дата" />
        </Label>
        </InputContainer>
          <br />
          <label>За
              <input {...register('З')}
              placeholder="З" />
              
      </label>
      <br />
      <Button type="submit">Сформувати</Button>
    </ReportFormContainer>
  );
};