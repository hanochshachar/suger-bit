import React, { useEffect, useRef, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCalenderAsync } from "../../api/getCalenderAPI";
import { getCalenderSelected } from "../../slices/getCalenderSlice";
import axios from "axios";
import "../../style/home.scss";
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
    } catch (error) {
      console.error(error);
    }
  };

  // const handleBoll = () => {
  //   if(sugarRef.current) {
  //     sugarRef.current.focus()
  //   }
  //   // if(insulinBool && insulinRef.current){
  //   //   insulinRef.current.focus()
  //   // }
  // }

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const inputElement = document.querySelector(`input[name="sugar"]`);
  // const inputElementIn = document.querySelector(`input[name="insulin"]`);

  // function handleClick(event: any) {
  //   if (sugarBool && !inputElement?.contains(event.target)) {
  //     setSugarBool(false);
  //   }
  //   if(insulinBool && !inputElementIn?.contains(event.target)) {
  //     setInsulinBool(false);
  //   }
  // }

  // document.addEventListener("click", handleClick);

  return (
    <div className="total">
      {insulinBool === false ? (
        <h1 onClick={() => setInsulinBool(true)}>אינסולין {insulin}</h1>
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
      <h1> פחמימות {carbohydrates}</h1>
      {sugarBool === false ? (
        <h1 onClick={() => {setSugarBool(true)}}>סוכר {sugar}</h1>
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
      <h1>{name}</h1>
    </div>
  );
};
