import React, { useEffect, useMemo, useState } from "react";
import { getCalenderAsync } from "../../../api/getCalenderAPI";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCalenderSelected } from "../../../slices/getCalenderSlice";
import { NavDaybook } from "../NavDaybook";
import { date } from "../../../api/getCalenderAPI";
import { HomeDBCard } from "./HomeDBCard";
import { HomeDBCardDetails } from "./HomeDBCardDetails";
import '../../../../src/style/homeDB.scss'
import { HomeDBTotal } from "./HomeDBTotal";
import noV from '../../../images/noV.png'
import X from '../../../images/X.png';
import daybook from '../../../images/daybook1.png';

export const HomeDB = () => {
  const dispatch: any = useAppDispatch();
  const selectedValueCalender: any[] = useAppSelector(getCalenderSelected);
  const dateFormat = new Date();
  const allDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const split = allDate.split(" ");
  const date = split[0];
  const [curDate, setCurDate] = useState(new Date());
  const [dateInput, setDateInput] = useState(date);
  const [displayDetails, setDisplayDetails] = useState<string | null>(null);

  // let dateForDB = new Date()

  const handleDaybook = (ev: any) => {
    ev.preventDefault();
    try {
      const dateTargeted = ev.target.value;
      setDateInput(dateTargeted);
      // getData()
      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const getData = async () => {
      await dispatch(getCalenderAsync({ date: dateInput }));
    };

    getData();
  }, [dateInput])

  const groupBy = () => {
    const groupByTime = (selectedValueCalender as any).reduce(
      (result: any, currentValue: any) => {
        const key = currentValue.time.slice(0, 5)
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(currentValue);
        return result;
      },
      {}
    );
  
    return groupByTime;
  };

  const productByTime = useMemo( () => {return selectedValueCalender?
    groupBy(): []}, [selectedValueCalender] );
    
  const handleIncrease = () => {
    try {
      if (curDate.getTime() < dateFormat.getTime() ) {
        curDate.setDate(curDate.getDate() + 1);
      }
      
      const allCur = curDate.toISOString().slice(0, 19).replace("T", " ");
      const splitAllCur = allCur.split(" ");
      const cur = splitAllCur[0];
      setDateInput(cur);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrease = () => {
    try {
      curDate.setDate(curDate.getDate() - 1);
      const allCur = curDate.toISOString().slice(0, 19).replace("T", " ");
      const splitAllCur = allCur.split(" ");
      const cur = splitAllCur[0];
      setDateInput(cur);
    } catch (error) {
      console.log(error);
    }
  };
  
  const keys = Object.keys(productByTime)
  let insulinArray = []
  let sugarArray: number[] = []

   for (let i = 0; i < keys.length; i++) {
      insulinArray.push(productByTime[keys[i]][0].insulin)
      sugarArray.push(productByTime[keys[i]][0].suger)
     
     
     
  }
  const totalInsulin = insulinArray.reduce((total, cur) => (
        total + cur
  ), 0)
  
  const totalSugar = sugarArray.reduce((total, cur) => (
    total + cur
  ), 0)
  const averageSugar = totalSugar / sugarArray.length
  ;
  
  
  let carboArray = []
  for(let i = 0; i < selectedValueCalender.length; i++){

    carboArray.push(selectedValueCalender[i].carbohydrates)
    
  }

   const totalCarbo = carboArray.reduce((total, cur) => (
      total + cur
   ), 0)

   
    

  return (
    <>
      <div className="top">
        <div className="V">
          <img src={noV} alt="" />
        </div>
        <div className="titleDB">
        <img className="imgDB" src={daybook} alt="" />
        <h3 className="titleText">יומן</h3>
        </div>
        <div className="X">
          <img src={X} alt="" />
        </div>
      </div>

      <NavDaybook />
      <div className="chooseDate">
        <button onClick={handleIncrease}>+</button>
        <input type="date" onChange={handleDaybook} value={dateInput} />
        <button onClick={handleDecrease}>-</button>
      </div>

      {Object.keys(productByTime)?.map((key: string, i: number) => {
          const key1 = key.slice(0, 5)
            const products: any[] =
            productByTime[key as keyof typeof productByTime];
          const sumCarbohydrates = products.reduce(
            (acc, cur) => acc + (cur.carbohydrates || 0),
            0
          )
          const productIds = products.map(product => product.id);
          return (
            <div>
            <button 
              onClick={() => setDisplayDetails(displayDetails === key ? null : key)}>
              <HomeDBCard
                key={i}
                name={key1}
                sugar={products[0].suger || 0}
                insulin={products[0].insulin || 0}
                carbohydrates={sumCarbohydrates}
                id={productIds}
              />
            </button>
            {displayDetails === key && products?.map((product: any, i) => {
              return(
  
                <HomeDBCardDetails key={i} name={product.name}
                 unit={product.unit} carbohydrates={product.carbohydrates} id={product.id} />
              )
            })}
          </div>
  );
        })}
        <HomeDBTotal averageSugar={averageSugar} totalCarbo={totalCarbo} totalInsulin={totalInsulin}/>
          </>
          )}