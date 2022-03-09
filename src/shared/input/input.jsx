import React from 'react';

export const Input = ({ label, name, value, type, validations, onChange, onBlur, error }) => {
  return (
    <div className="form-control">
      <div className="flex-container">
        {type !== 'hidden' && <label htmlFor={name}>{label}</label>}
        <div className="form-input">
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={e => onChange(e.target.name, e.target.value)}
            onBlur={e => onBlur(e, validations)} />
          {type !== 'hidden' && error[name] && <div className="error-msg">{error[name]}</div>}

        </div>
      </div>
    </div>

  )
}
