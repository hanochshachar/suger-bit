import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate()
  
  async function handleLogin(ev:any){
    ev.preventDefault();
    try {
      let {email, password} = ev.target.elements;
      email = email.value;
      password = password.value;
      console.log(email, password)
      const {data} = await axios.get(`/api-sugar/login?email=${email}&password=${password}`)
      const {ok} = data;
      console.log(data);
      if (ok){
        navigate('/home')
      } else alert ('pleas register first')
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder='email' />
      <input type="password" name="password" placeholder='password' />
      <input type="submit" value="login" />
    </form>
  )
}
