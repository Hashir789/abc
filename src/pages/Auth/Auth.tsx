import './Auth.css';
import { FC } from 'react';
import InputField from '../../components/Input/InputField/InputField';
import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";

const Auth: FC = () => {
  return (
    <FlipCard width='90vw' maxWidth='350px'>
      <FlipCardFrontSide>
        <h1 className="logo">Kitaab</h1>
        <form action="#" method="post" className="form">
          {/* <div className="input-field">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="text" name="email" placeholder="john.doe@example.com" autoComplete="off" />
            <div className="left-icon">
              <i className=" fa-lg fa-solid fa-envelope" style={{ color: "#ffffff99" }}></i>
            </div>
          </div>
          <p className="helper-text">This is a helper text</p> */}
          <InputField type='email'/>
          <InputField type='password'/>
          {/* <div className="input-field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" type="password" name="password" placeholder="••••••••" autoComplete="off" />
            <div className="left-icon">
              <i className=" fa-lg fa-solid fa-lock" style={{ color: "#ffffff99" }}></i>
            </div>
            <div className="right-icon">
              <i className=" fa-lg fa-solid fa-eye-slash" style={{ color: "#ffffff99" }}></i>
            </div>
          </div>
          <p className="helper-text">This is a helper text</p> */}
          <div className="input-field-checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Keep me logged in</label>
          </div>
          <button type="submit" className="submit-login">Login</button>
        </form>
        <hr/>
        <p className="change-side">Don't have an account? 
          <button className="link" data-flip-action>&nbsp;Signup</button>
        </p>
      </FlipCardFrontSide>
      <FlipCardBackSide>
        <h1 className="logo">Kitaab</h1>
        <form action="#" method="post" className="form">
          <div className="input-field">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="text" name="email" placeholder="john.doe@example.com" autoComplete="off" />
            <div className="left-icon">
              <i className=" fa-lg fa-solid fa-envelope" style={{ color: "#ffffff99" }}></i>
            </div>
          </div>
          <p className="helper-text">This is a helper text</p>
          <div className="input-field">
            <label className="label" htmlFor="password">Password</label>
            <input className="input" type="password" name="password" placeholder="••••••••" autoComplete="off" />
            <div className="left-icon">
              <i className=" fa-lg fa-solid fa-lock" style={{ color: "#ffffff99" }}></i>
            </div>
            <div className="right-icon">
              <i className=" fa-lg fa-solid fa-eye-slash" style={{ color: "#ffffff99" }}></i>
            </div>
          </div>
          <p className="helper-text">This is a helper text</p>
          <div className="input-field-checkbox">
            <input type="checkbox" id="rememberMe2" name="rememberMe2" />
            <label htmlFor="rememberMe2">Keep me logged in</label>
          </div>
          <button type="submit" className="submit-login">Signup</button>
        </form>
      <hr/>
      <p className="change-side">Already have an account? 
        <button className="link" data-flip-action>&nbsp;Login</button>
      </p>
      </FlipCardBackSide>
    </FlipCard>
  )
}

export default Auth;