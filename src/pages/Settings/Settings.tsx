import './Settings.css';
import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }, [])
  
  return (
    <div className='margin'>
      <Card width='100%' className="settings-height">
        <h1>Settings</h1>
      </Card>
    </div>
  );
};

export default Settings;