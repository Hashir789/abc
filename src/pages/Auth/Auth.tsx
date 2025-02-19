import './Auth.css';
import { FC } from 'react';
import Checkbox from '../../components/Input/Checkbox/Checkbox';
import InputField from '../../components/Input/InputField/InputField';
import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";

const Auth: FC = () => {
  return (
    <FlipCard width='90vw' maxWidth='350px'>
      <FlipCardFrontSide>
        <h1 className="logo">Kitaab</h1>
        <form action="#" method="post" className="form">
            <InputField type='email' leftIcon='fa-envelope' placeholder='john.doe@example.com'/>
            <InputField type='password'/>
            <Checkbox text='Keep me logged in'/>
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
          <div className='signup-window-1'>
            <div className="signup-window-2">
              <InputField type='email' leftIcon='fa-envelope' placeholder='john.doe@example.com'/>
              <InputField type='email' leftIcon='fa-envelope' placeholder='john.doe@example.com'/>
              <InputField type='email' leftIcon='fa-envelope' placeholder='john.doe@example.com'/>
              <InputField type='password'/>
            </div>
          </div>
          <Checkbox text='Keep me logged in'/>
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