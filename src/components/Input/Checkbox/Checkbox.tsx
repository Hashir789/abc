import './Checkbox.css';
import { FC, useId } from 'react';

interface CheckboxProps {
  text?: string;
}

const Checkbox: FC<CheckboxProps> = ({ text }) => {
  const id = useId();
  return (
    <div className="input-field-checkbox">
        <input type="checkbox" id={id} name={id} />
        <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;