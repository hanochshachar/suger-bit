import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addUserAsync } from '../api/regAPI';
import { selectedUser } from '../slices/registerSlice';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector(selectedUser)
    const navigate = useNavigate()
    const handleSubmit = (ev:any)=> {
        try {
            ev.preventDefault();
            const cookie = Math.floor(Math.random() * 1000000)
            let {firstName, lastName, id, email, password}  = ev.target.elements;
             firstName = firstName.value;
             lastName = lastName.value;
             id = id.value;
             email = email.value;
             password = password.value;
            dispatch(addUserAsync({firstName, lastName, id, email, password, cookie}))

            
        } catch (error) {
            console.error(error);
            
        }
    }
    console.log(selector);
    
    useEffect(()=>{
        console.log(selector);
        
        if(selector == true){
            navigate('/home')
        }
    },[selector])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' placeholder='first name' required/>
            <input type="text" name='lastName' placeholder='last name' required/>
            <input type="text" name='id' placeholder='id' />
            <input type="email" name="email" placeholder='email' required/>
            <input type="password" name="password" placeholder='password' required />
            <input type="submit" value="register" />
        </form>
    </div>
  )
}
