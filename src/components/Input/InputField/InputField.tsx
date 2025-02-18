import './InputField.css';
import { FC, useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'password' | 'email';
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
}

const InputField: FC<InputFieldProps> = ({ type, leftIcon, rightIcon, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  return (
    <>
      <div className="input-field">
        <label className="label" htmlFor={type}>
          {type === 'password' ? "Password" : "Email"}
        </label>
        <input
          className="input"
          type={isPassword && !showPassword ? 'password' : 'text'}
          name={type}
          placeholder={type === 'password' ? "••••••••" : placeholder ? placeholder : ''}
          autoComplete="off"
          style={{ paddingRight: (isPassword || rightIcon) ? '40px' : '10px' }}
        />
        {(isPassword || leftIcon) && <div className="left-icon">
          <i className={`fa-lg fa-solid ${ isPassword ? "fa-lock" : leftIcon }`} style={{ color: "#ffffff99" }}></i>
        </div>}
        {(isPassword || rightIcon) && (
          <div className="right-icon" onClick={() => setShowPassword(!showPassword)}>
            <i
              className={`fa-lg fa-solid ${ isPassword ? showPassword ? 'fa-eye-slash' : 'fa-eye' : rightIcon }`}
              style={{ color: "#ffffff99", cursor: "pointer" }}
            ></i>
          </div>
        )}
      </div>
      <p className="helper-text">This is a helper text</p>
    </>
  );
};

export default InputField;