import React, { useState } from 'react';
import "../components/loginform.css"
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import {useNavigate} from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Check if username and password are valid
    if (username === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Incorrect username');
    }
  }

  if (loggedIn) {
    navigate('/home');
  }

  return (
    <div className="page">
    <form onSubmit={handleSubmit}>  
      <div className='image'>
        <img className='img1' src={img1}>
        </img>
        <img className='img2' src={img2}>
        </img>
      </div>
      <h1>Sign In</h1>
      <label className="username-text" htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={username} onChange={event => setUsername(event.target.value)} />
      <br/>
      <br/>
      <input type="submit" value="Sign In" />
    </form>
    </div>
  );
}

export default LoginForm;