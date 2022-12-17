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

export const Home = () => {
  const [displayDetails, setDisplayDetails] = useState<string | null>(null);
  const [productByTime, setProductByTime] = useState({});
  const dispatch: any = useAppDispatch();
  const selectedValueCalender = useAppSelector(getCalenderSelected);
  const allDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const split = allDate.split(" ");
  const date = split[0];

  useEffect(() => {
    const getData = async () => {
      await dispatch(getCalenderAsync({ date }));
 
      setProductByTime(groupBy());
    };
    getData();
  }, []);
    
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

  return (
    <>
      <div className="top">
        <div className="v">v</div>
        <div className="insert">
          <h1>הזן ערכים</h1>
        </div>
        <div className="x">x</div>
      </div>
      <Navbar />
      <div className="firstValues">
        {Object.keys(productByTime).map((key: string, i: number) => {
          // const products: any[] =
          //   productByTime[key as keyof typeof productByTime];
          const key1 = key.slice(0, 5)
            const products: any[] =
            productByTime[key as keyof typeof Values];
          const sumCarbohydrates = products.reduce(
            (acc, cur) => acc + (cur.carbohydrates || 0),
            0
          )
          return (
            <div>
            <button onClick={() => setDisplayDetails(displayDetails === key ? null : key)}>
              <HomeCard
                key={i}
                name={key1}
                sugar={products[0].sugar || 0}
                insulin={products[0].insulin || 0}
                carbohydrates={sumCarbohydrates}
              />
            </button>
            {displayDetails === key && products.map((product: any, i) => {
              return(
  
                <HomeCardDetails key={i} name={product.name}
                 unit={product.unit} carbohydrates={product.carbohydrates} id={product.id} />
              )
            })}
            </div>
          )
        
        })}
        
      </div>
    </>
  );
};
