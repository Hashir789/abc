import './InputField.css';
import { FC, useState, useId } from 'react';

interface InputFieldProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
  isPassword?: boolean;
  isScrollbar?: boolean;
}

const InputField: FC<InputFieldProps> = ({ title, leftIcon, rightIcon, placeholder, isPassword, isScrollbar }) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();
  return (
    <>
      <div className="input-field" style={{ marginRight: isScrollbar ? '7px': '15px' }}>
        <label className="label" htmlFor={id}>
          {title}
        </label>
        <input
          className="input"
          type={isPassword && !showPassword ? 'password' : 'text'}
          name={id}
          placeholder={isPassword ? "••••••••" : placeholder ? placeholder : ''}
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