import './InputField.css';
import { FC, useState } from 'react';

interface InputFieldProps {
  type: 'text' | 'password' | 'email';
}

const InputField: FC<InputFieldProps> = ({ type }) => {
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
          placeholder={type === 'password' ? "••••••••" : "john.doe@example.com"}
          autoComplete="off"
        />
        <div className="left-icon">
          <i className=" fa-lg fa-solid fa-lock" style={{ color: "#ffffff99" }}></i>
        </div>
        {isPassword && (
          <div className="right-icon" onClick={() => setShowPassword(!showPassword)}>
            <i
              className={`fa-lg fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
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