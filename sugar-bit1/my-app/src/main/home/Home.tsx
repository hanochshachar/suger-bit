import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../../style/home.scss";
import { Favorites } from "../favorites/Favorites";
import { Values } from "../values/Values";
import { Navbar } from "../Navbar";
import { HomeCard } from "./HomeCard";
import { getCalenderSelected } from "../../slices/getCalenderSlice";
import { HomeCardDetails } from "./HomeCardDetails";
import axios from "axios";
import { selectedCarboTarget } from "../../slices/carboTargetSlice";
import {
  addCarboCount,
  selectedCarboCount,
} from "../../slices/carboCountSlice";
import { addSumCarbo, selectedSumCarbo } from "../../slices/sumAllCarboSlice";
import { getTargetAsync } from "../../api/targetAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCalenderAsync } from "../../api/getCalenderAPI";
import noX from "../../../src/images/aftVFLno.png";
import noV from "../../../src/images/noV.png";
import side from "../../images/side.png";
import colored from "../../images/colored+.png";
import carbo from "../../images/carbo1.png";
import { Side } from "../../side/Side";

export const Home = () => {
  const [displayDetails, setDisplayDetails] = useState<string | null>(null);

  const [insert, setInsert] = useState<boolean>(false);
  const [sideBool, setSideBool] = useState<boolean>(false);
  const dispatch: any = useAppDispatch();
  const selectedValueCalender: any[] = useAppSelector(getCalenderSelected);
  const selectedTarget = useAppSelector(selectedCarboTarget);
  const selectSumCarbo: any = useAppSelector(selectedSumCarbo);
  const carboCount = useAppSelector(selectedCarboCount);
  const allDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const split = allDate.split(" ");
  const date = split[0];
  

  const currentTime = split[1].slice(0, 5);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getCalenderAsync({ date }));

      // setProductByTime(groupBy());
    };

    getData();
  }, []);
  

  const groupBy = () => {
    const groupByTime = (selectedValueCalender as any).reduce(
      (result: any, currentValue: any) => {
        const key = currentValue.time.slice(0, 5);
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

  const productByTime = useMemo(() => {
    return selectedValueCalender ? groupBy() : [];
  }, [selectedValueCalender]);

  const handleAddValue = async (ev: any) => {
    ev.preventDefault();
    try {
      let { date, time, sugar, carbohydrates, insulin } = ev.target.elements;
      date = date.value;
      time = time.value;
      sugar = Number(sugar.value);
      carbohydrates = Number(carbohydrates.value);
      insulin = Number(insulin.value);
      const { data } = await axios.post("/api-sugar/insert-value-home", {
        date,
        time,
        sugar,
        carbohydrates,
        insulin,
      });
      
      setInsert(false);
    } catch (error) {
      console.error(error);
    }
  };

  let sumAllCarbo = 0;

  if (Array.isArray(selectedValueCalender)) {
    sumAllCarbo = selectedValueCalender?.reduce(
      (acc: any, current: any) => acc + (current.carbohydrates || 0),
      0
    );
  }

  const handleCarboTarget = async (ev: any) => {
    ev.preventDefault();
    const target = ev.target.elements.carboTarget.value;
   

    if (selectedTarget.length === 0) {
      const { data } = await axios.post("/api-sugar/add-target", {
        date,
        target,
      });
     window.location.reload()
    } else {
      const { data } = await axios.post("/api-sugar/update-target", {
        date,
        target,
      });
      window.location.reload()
    }

  };

  useEffect(() => {
    dispatch(getTargetAsync({ date }));
  }, []);

  const percentage = Math.round(
    (100 * selectSumCarbo) / Number(selectedTarget[0]?.target)
  );

  useEffect(() => {
    dispatch(addSumCarbo(sumAllCarbo));

    const length: number = (document.getElementById("target") as HTMLElement)
      .clientWidth;
    const carbo = document.getElementsByClassName("carbo");
    let result = 0;

    

    // console.log(percentage);

    if (
      selectedTarget.length > 0 &&
      Number(selectedTarget[0].target) < length
    ) {
      result = length / Number(selectedTarget[0].target);
      

      dispatch(addCarboCount(selectSumCarbo * result));

      (carbo[0] as any).style.width = `${carboCount}px`;
      
    } else if (
      selectedTarget.length > 0 &&
      Number(selectedTarget[0].target) > length
    ) {
      result = Number(selectedTarget[0].target) / length;
      dispatch(addCarboCount(selectSumCarbo / result));
      (carbo[0] as any).style.width = `${carboCount}px`;
    }
  });

//  useEffect(() => {
//   if(sideBool === true) {
//    const side = document.getElementsByClassName("side")[0]
//   side.setAttribute('style', " background: rgba(0,0,0,.5)"  )} else {
//     document.getElementsByTagName("body")[0].style.opacity = '1'
//   }
//  })

  return (
    <>
      <div className="top">
        <div className="topCenter">
          <div className="v t">
            <img src={noV} alt="" />
          </div>
          <div className="insert t" onClick={() => setInsert(true)}>
            <img className="colored" src={colored} alt="" />
            <h3 className="ins">הזן ערכים</h3>
          </div>
          <div className="x t">
            <img src={noX} alt="" />
          </div>
        </div>
        {/* <Link to='/side' className="menuBtn" >
        <img className="menuImg" src={side} alt="" />
        </Link> */}
        <div className="menuBtn" onClick={() => setSideBool(true)}>
          <img className="menuImg" src={side} alt="" />
        </div>
      </div>
      {sideBool === true && <div className="side">
      <Side setSideBool={setSideBool}/>
      </div>  }
        
      {insert === true && (
        <form className="insertValues" onSubmit={handleAddValue}>
          <div className="date1">
            <img src="" alt="daybook" />
            <input type="date" name="date" defaultValue={date} required />
          </div>
          <div className="time">
            <img src="" alt="clock" />
            <input
              type="time"
              name="time"
              defaultValue={currentTime}
              required
            />
          </div>
          <div className="sugar">
            <img src="" alt="sugar" />
            <input
              type="text"
              name="sugar"
              maxLength={3}
              defaultValue="000"
              required
            />
          </div>
          <div className="carbohydrates">
            <img src="" alt="carbo" />
            <input
              type="text"
              name="carbohydrates"
              maxLength={3}
              defaultValue="000"
              required
            />
          </div>
          <div className="insulin">
            <img src="" alt="insulin" />
            <input
              type="text"
              name="insulin"
              maxLength={3}
              defaultValue="000"
              required
            />
          </div>
          <button type="submit">
            <img src="" alt="V" />
          </button>
        </form>
      )}

      <Navbar />
      <div className="firstValues">
        {Object.keys(productByTime)?.map((key: string, i: number) => {
          const key1 = key.slice(0, 5);
          const products: any[] =
            productByTime[key as keyof typeof productByTime];
          const sumCarbohydrates = products.reduce(
            (acc, cur) => acc + (cur.carbohydrates || 0),
            0
          );
          const productIds = products.map((product) => product.id);
          return (
            <div>
              <div
                onClick={() =>
                  setDisplayDetails(displayDetails === key ? null : key)
                }
              >
                <HomeCard
                  key={i}
                  name={key1}
                  sugar={products[0].suger || 0}
                  insulin={products[0].insulin || 0}
                  carbohydrates={sumCarbohydrates}
                  id={productIds}
                />
              </div>
              {displayDetails === key &&
                products?.map((product: any, i) => {
                  return (
                    <HomeCardDetails
                      key={i}
                      name={product.name}
                      unit={product.unit}
                      carbohydrates={product.carbohydrates}
                      id={product.id}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
      <form onSubmit={handleCarboTarget}>
        <input type="number" name="carboTarget" />
        <input type="submit" value="V" />
      </form>
      <div className="target" id="target">
        <h4 className="prec dis">{percentage} %</h4>
        <h4 className="sum"> ג' {selectSumCarbo} </h4>
        <div className="carbo dis">
          <img className="carImg" src={carbo} alt="" />
        </div>
      </div>
    </>
  );
};
