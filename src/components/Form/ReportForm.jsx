import { useForm } from 'react-hook-form';
import { TitleThird, ReportFormContainer, Button, InputContainer, Input, Label, Input3, Label3 } from './ReportForm.styled';

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
          <Label3>За
              <Input3 {...register('З')}
              placeholder="З" />
             <span>квартал </span> 
      </Label3>
      <br />
      <Button type="submit">Сформувати</Button>
    </ReportFormContainer>
  );
};