import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addUserAsync } from '../api/regAPI';
import { selectedUser } from '../slices/registerSlice';
import { useNavigate } from 'react-router-dom';
import { Base } from './Base';
import LoginGoogle from './GoogleLogin';

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
        <Base/>
        <select name="language" id="" defaultValue='עברית'>
            <option value="עברית">עברית</option>
            <LoginGoogle/>
        </select>
        <form onSubmit={handleSubmit}>
            <div className="nameImage">
                <div className="name">
                    <input type="text" name='firstName' placeholder='שם פרטי' required/>
                    <input type="text" name='lastName' placeholder='שם משפחה' required/>
                    <input type="text" name='id' placeholder='תעודת זהות' />
                </div>
                <div className="image">
                    <input type="image" src="" alt="תמונה" />
                </div>
            </div>
            
            <input type="email" name="email" placeholder='אימייל' required/>
            <input type="submit" value="register" />
        </form>
    </div>
  )
}
