import './Auth.css';
import { FC, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Input/Checkbox/Checkbox';
import InputField from '../../components/Input/InputField/InputField';
import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";

const Auth: FC = () => {
  useEffect(()=>{
    document.getElementsByClassName('display-window')[0].scrollTop = 150;
  }, [])
  return (
    <FlipCard width='90vw' maxWidth='350px'>
      <FlipCardFrontSide>
        <h1 className='logo'>Kitaab</h1>
        <form className="form">
          <InputField title='Email' placeholder='john.doe@example.com' leftIcon='fa-envelope'/>
          <InputField title='Password' isPassword/>
          <Checkbox text='Keep me logged in'/>
          <Button>Login</Button>
        </form>
        <hr/>
        <p className="change-side">Don't have an account? 
          <button className="link" data-flip-action>&nbsp;Signup</button>
        </p>
      </FlipCardFrontSide>
      <FlipCardBackSide>
        <h1 className="logo">Kitaab</h1>
        <form className="form">
          <div className='display-window'>
            <InputField title='Username' placeholder='John Doe' leftIcon='fa-user' isScrollbar/>
            <InputField title='Email' placeholder='john.doe@example.com' leftIcon='fa-envelope' isScrollbar/>
            <InputField title='Password' isPassword isScrollbar/>
            <InputField title='Confirm Password' isPassword isScrollbar/>
          </div>
          <Checkbox text='Keep me logged in'/>
          <Button>Signup</Button>
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