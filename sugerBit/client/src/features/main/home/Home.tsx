import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../../style/home.scss";
import { Favorites } from "../favorites/Favorites";
import { Values } from "../values/Values";
import { Navbar } from "../Navbar";
import { HomeCard } from "./HomeCard";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCalenderSelected } from "../../slices/getCalenderSlice";
import { getCalenderAsync } from "../../api/getCalenderAPI";
import { HomeCardDetails } from "./HomeCardDetails";
import axios from "axios";

export const Home = () => {
  const [displayDetails, setDisplayDetails] = useState<string | null>(null);
  const [productByTime, setProductByTime] = useState({});
  const [insert, setInsert] = useState<boolean>(false)
  const dispatch: any = useAppDispatch();
  const selectedValueCalender = useAppSelector(getCalenderSelected);
  const allDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const split = allDate.split(" ");
  const date = split[0];
  const currentTime = split[1].slice(0, 5)
  
   
  
  useEffect(() => {
    const getData = async () => {
      await dispatch(getCalenderAsync({ date }));
      
      setProductByTime(groupBy());
    };
    
    getData();
  }, [selectedValueCalender]);
    
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

  const handleAddValue = async(ev: any) => {
    ev.preventDefault()
    try {
      let {date, time, sugar, carbohydrates, insulin} = ev.target.elements;
      date = date.value;
      time = time.value;
      sugar = Number(sugar.value);
      carbohydrates = Number(carbohydrates.value);
      insulin = Number(insulin.value);
      const {data} = await axios.post('/api-sugar/insert-value-home', {date, time, sugar, carbohydrates, insulin})
      console.log(data);
      setInsert(false)
      
    } catch (error) {
      console.error(error);
      
    }
  }

  const sumAllCarbo = (selectedValueCalender as any).reduce(
    (acc: any, current: any) =>  acc + (current.carbohydrates || 0), 0
)

  return (
    <>
      <div className="top">
        <div className="v">v</div>
        <button className="insert" onClick={() => setInsert(true)}>
          <h1>הזן ערכים</h1>
        </button>
        <div className="x">x</div>
      </div>
      {insert === true && <form className="insertValues" onSubmit={handleAddValue}>
        <div className="date1">
          <img src="" alt="daybook" />
           <input type='date'name="date" defaultValue={date} required/>
        </div>
        <div className="time">
          <img src='' alt="clock" />
           <input type='time' name="time" defaultValue={currentTime} required/>
        </div>
        <div className="sugar">
          <img src="" alt="sugar" />
          <input type='text' name='sugar' maxLength={3} defaultValue="000" required/>
        </div>
        <div className="carbohydrates">
          <img src="" alt="carbo" />
          <input type='text' name="carbohydrates" maxLength={3} defaultValue="000" required />
        </div>
        <div className="insulin">
          <img src="" alt="insulin" />
         <input type='text' name='insulin'  maxLength={3} defaultValue="000" required/>
        </div>
        <button type="submit">
          <img src="" alt="V" />
        </button>
      </form> }

      <Navbar />
      <div className="firstValues">
        {Object.keys(productByTime)?.map((key: string, i: number) => {
          const key1 = key.slice(0, 5)
            const products: any[] =
            productByTime[key as keyof typeof Values];
          const sumCarbohydrates = products.reduce(
            (acc, cur) => acc + (cur.carbohydrates || 0),
            0
          )
          const productIds = products.map(product => product.id);
          return (
            <div>
            <button 
            onClick={() => setDisplayDetails(displayDetails === key ? null : key)}>
              <HomeCard
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
  
                <HomeCardDetails key={i} name={product.name}
                 unit={product.unit} carbohydrates={product.carbohydrates} id={product.id} />
              )
            })}
            </div>
          )
        
        })}
        
      </div>
      <div className="target"> 
        <div className="carbo">
        {sumAllCarbo}
        </div>

      </div>
    </>
  );
};
