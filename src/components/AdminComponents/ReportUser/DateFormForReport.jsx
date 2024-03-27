mport React, { useState } from 'react';

const MyForm = () => {
  const [inputType, setInputType] = useState('date');
  const [date, setDate] = useState('');
  const [quarter, setQuarter] = useState('');
  const [year, setYear] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      setDate(value);
    } else if (name === 'quarter') {
      setQuarter(value);
    } else if (name === 'year') {
      setYear(value);
    }
  };

  const handleSelectChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div>
      <label>
        Выберите тип ввода:
        <select value={inputType} onChange={handleSelectChange}>
          <option value="date">Дата</option>
          <option value="quarter">Квартал и год</option>
        </select>
      </label>

      {inputType === 'date' && (
        <input type="date" name="date" value={date} onChange={handleInputChange} />
      )}

      {inputType === 'quarter' && (
        <>
          <label>Квартал:</label>
          <input type="number" name="quarter" value={quarter} onChange={handleInputChange} />

          <label>Год:</label>
          <input type="number" name="year" value={year} onChange={handleInputChange} />
        </>
      )}
    </div>
  );
};

export default MyForm;