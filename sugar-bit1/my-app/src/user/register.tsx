import React, { useEffect } from "react";
import { addUserAsync } from "../api/regAPI";
import { selectedUser } from "../slices/registerSlice";
import { useNavigate } from "react-router-dom";
import { Base } from "./Base";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { auth, provider } from "../firebase";
import firebase from "firebase/compat";

export const Register = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(selectedUser);
  const navigate = useNavigate();
  const handleSubmit = (ev: any) => {
    try {
      ev.preventDefault();
      const cookie = String(Math.floor(Math.random() * 100000000));
      let { firstName, lastName, id, email, password } = ev.target.elements;
      firstName = firstName.value;
      lastName = lastName.value;
      id = id.value;
      email = email.value;
      password = password.value;
      dispatch(
        addUserAsync({ firstName, lastName, id, email, password, cookie })
      );
    } catch (error) {
      console.error(error);
    }
  };
  console.log(selector);

  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user?.displayName);
        console.log(result.user?.email);
        const name = result.user?.displayName
        const nameSplit = name?.split(' ')
        const firstName = nameSplit ? nameSplit[0] : undefined
        const lastName = nameSplit ? nameSplit[1] : undefined
        const email = result.user?.email || undefined
        const cookie = result.user?.uid || undefined
        const id = ''
        const password = ''
        if (firstName !== undefined && 
            lastName !== undefined && email !== undefined &&
             cookie !== undefined) {
        dispatch(
            addUserAsync({ firstName, lastName, id, email, password, cookie })
          );}
        
      })
      .catch((error: any) => alert(error.message));
  };

  function signInWithPopup(provider: firebase.auth.GoogleAuthProvider): any {
    throw new Error("Function not implemented.");
  }

  useEffect(() => {
    console.log(selector);

    if (selector == true) {
      navigate("/home");
    }
  }, [selector]);
  return (
    <div>
      <Base />
      <select name="language" id="" defaultValue="עברית">
        <option value="עברית">עברית</option>
        {/* <LoginGoogle/> */}
      </select>
      <button onClick={signInGoogle}>Sign in with google</button>
      <form onSubmit={handleSubmit}>
        <div className="nameImage">
          <div className="name">
            <input
              type="text"
              name="firstName"
              placeholder="שם פרטי"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="שם משפחה"
              required
            />
            <input type="text" name="id" placeholder="תעודת זהות" />
          </div>
          <div className="image">
            <input type="image" src="" alt="תמונה" />
          </div>
        </div>

        <input type="email" name="email" placeholder="אימייל" required />
        <input type="password" name="password" placeholder="סיסמא" required/>
        <input type="submit" value="register" />
      </form>
    </div>
  );
};
