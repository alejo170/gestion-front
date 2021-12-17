import React from 'react';

const Input = ({ label, name, defaultValue, type, required }) => {
  return (
    <label htmlFor={name} className=''>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className='form-control'
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;
