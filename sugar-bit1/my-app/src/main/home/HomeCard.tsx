import React, { useEffect, useRef, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCalenderAsync } from "../../api/getCalenderAPI";
import { getCalenderSelected } from "../../slices/getCalenderSlice";
import axios from "axios";
import "../../style/home.scss";
import blood from '../../images/blood1.png';
import carbo from '../../images/carbo1.png';
import insulinImg from '../../images/ins1.png';
interface firstValue {
  name: string;
  sugar: number;
  insulin: number;
  carbohydrates: number;
  id: number[];
}

export const HomeCard = ({
  name,
  sugar,
  insulin,
  carbohydrates,
  id,
}: firstValue) => {
  const [sugarBool, setSugarBool] = useState<boolean>(false);
  const [insulinBool, setInsulinBool] = useState<boolean>(false);
  const sugarRef = useRef<HTMLInputElement | null>(null);
  const insulinRef = useRef<HTMLInputElement | null>(null);
  const handleBlurIns = (ev: any) => {
    ev.preventDefault();
    try {
      const insulin = ev.target.value;
      id.forEach(async (id) => {
        const { data } = await axios.post("/api-sugar/insert-insulin", {
          id,
          insulin,
        });
        console.log(data);
      });
      setInsulinBool(false);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyUpIns = async (ev: any) => {
    ev.preventDefault();
    try {
      const insulin = ev.target.value;
      if (ev.keyCode === 13) {
        id.forEach(async (id) => {
          const { data } = await axios.post("/api-sugar/insert-insulin", {
            id,
            insulin,
          });
          console.log(data);
        });
        setInsulinBool(false);
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlurSugar = (ev: any) => {
    ev.preventDefault();
    try {
      let sugar = ev.target.value;
      if(sugar) {id.forEach(async (id) => {
        const { data } = await axios.post("/api-sugar/insert-sugar", {
          id,
          sugar,
        });
        console.log(data);
      });}
      setSugarBool(false);
      window.location.reload()
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyUpSugar = async (ev: any) => {
    ev.preventDefault();
    try {
      let sugar = ev.target.value;
      if (ev.keyCode === 13) {
        id.forEach(async (id) => {
          const { data } = await axios.post("/api-sugar/insert-sugar", {
            id,
            sugar,
          });
          console.log(data);
        });
        setSugarBool(false);
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="total">
      {insulinBool === false ? (
        <div className="elements" onClick={(ev) => { ev.stopPropagation(); setInsulinBool(true)}}> 'יחי {insulin}  <img className="elemImg" src={insulinImg} alt="" /></div>
      ) : (
        <input
          type="text"
          name="insulin"
          maxLength={3}
          onBlur={handleBlurIns}
          onKeyUp={handleKeyUpIns}
          ref={insulinRef}
        />
      )}
      <div className="elements"> 'גר  {carbohydrates} <img className="elemImg" src={carbo} alt="" /></div>
      {sugarBool === false ? (
        <div className="elements" onClick={(ev) => { ev.stopPropagation(); setSugarBool(true)}}>  גר  {sugar} <img  className="elemImg"  src={blood} alt="" /></div>
      ) : (
        <input
          type="text"
          name="sugar"
          maxLength={3}
          onBlur={handleBlurSugar}
          onKeyUp={handleKeyUpSugar}
          ref={sugarRef}
        />
      )  }
      <h3>{name}</h3>
    </div>
  );
};
