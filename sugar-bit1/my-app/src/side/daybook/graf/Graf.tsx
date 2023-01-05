import React, { useEffect, useMemo, useState } from "react";
import { date } from "../../../api/getCalenderAPI";
import { NavDaybook } from "../NavDaybook";
import "../../../style/homeDB.scss";
import { Sugar } from "./Sugar";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { current } from "@reduxjs/toolkit";
import { calenderDetails } from "../../../slices/addCalenderSlice";
import axios from "axios";
import { Insulin } from "./Insulin";
import { Carbo } from "./Carbo";

export const Graf = () => {
  const dispatch = useAppDispatch();

  const date = new Date();
  const day = date.getDay();

  let saturdayDate;
  let sundayDate;

  const [sundayS, setSundayS] = useState<Date | null>();
  const [saturdayS, setSaturdayS] = useState<Date | null>();
  const [fullSunday, setFullSunday] = useState("");
  const [fullSaturday, setFullSaturday] = useState("");
  const [sunday, setSunday] = useState<any>("");
  const [monday, setMonday] = useState<any>("");
  const [tuesday, setTuesday] = useState<any>("");
  const [wednesday, setWednesday] = useState<any>("");
  const [thursday, setThursday] = useState<any>("");
  const [friday, setFriday] = useState<any>("");
  const [saturday, setSaturday] = useState<any>("");
  const [sun, setSun] = useState<any[]>([]);
  const [mon, setMon] = useState<any[]>([]);
  const [tue, setTue] = useState<any[]>([]);
  const [wed, setWed] = useState<any[]>([]);
  const [thu, setThu] = useState<any[]>([]);
  const [fri, setFri] = useState<any[]>([]);
  const [sat, setSat] = useState<any[]>([]);

  const [SunDetails, setSunDetails] = useState<any[]>([]);
  const [MonDetails, setMonDetails] = useState<any[]>([]);
  const [TueDetails, setTueDetails] = useState<any[]>([]);
  const [WedDetails, setWedDetails] = useState<any[]>([]);
  const [ThuDetails, setThuDetails] = useState<any[]>([]);
  const [FriDetails, setFriDetails] = useState<any[]>([]);
  const [SatDetails, setSatDetails] = useState<any[]>([]);

  let dayDateSunday;
  let monthDateSunday;

  let dayDateSaturday;
  let monthDateSaturday: any;

  useEffect(() => {
    if (day === 0) {
      sundayDate = date;
    } else {
      sundayDate = new Date(date.getTime());
      sundayDate.setDate(date.getDate() - day);
    }

    setSundayS(sundayDate);

    if (day === 6) {
      saturdayDate = date;
    } else {
      saturdayDate = new Date(date.getTime());
      saturdayDate.setDate(date.getDate() + (6 - day));
    }

    setSaturdayS(saturdayDate);
  }, []);

  useEffect(() => {
    changeWeek();
  }, [fullSunday, fullSaturday]);

  useEffect(() => {
    if (sundayS) {
      const daySunday = sundayS.getDate();
      const monthSunday = sundayS.getMonth() + 1;
      setFullSunday(`${daySunday}/${monthSunday}`);
    }

    if (saturdayS) {
      const daySaturday = saturdayS.getDate();
      const monthSaturday = saturdayS.getMonth() + 1;
      setFullSaturday(`${daySaturday}/${monthSaturday}`);
    }

    changeWeek();
  }, [saturdayS, sundayS]);

  const setDateWeek = (baseDate: Date, days: number): [Date, string] => {
    const currSunDay = new Date(baseDate?.getTime() || "");

    currSunDay?.setDate(currSunDay.getDate() + days);
    dayDateSunday = currSunDay && currSunDay.getDate();
    monthDateSunday = currSunDay && currSunDay.getMonth() + 1;

    return [currSunDay, `${dayDateSunday}/${monthDateSunday}`];
  };

  const setInitializedValue = () => {
    setSunday("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    setSun([]);
    setMon([]);
    setTue([]);
    setWed([]);
    setThu([]);
    setFri([]);
    setSat([]);

    setSunDetails([]);
    setMonDetails([]);
    setTueDetails([]);
    setWedDetails([]);
    setThuDetails([]);
    setFriDetails([]);
    setSatDetails([]);
  };

  const handleChangeDate = (days: number) => {
    setInitializedValue();
    try {
      const [sunday, dateSunStr] = setDateWeek(
        new Date(sundayS?.getTime() || ""),
        days
      );

      setSundayS(sunday);
      setFullSunday(dateSunStr);

      const [saturday, dateSutStr] = setDateWeek(
        new Date(saturdayS?.getTime() || ""),
        days
      );

      setSaturdayS(saturday);
      setFullSaturday(dateSutStr);
    } catch (error) {
      console.error(error);
    }
  };

  // let  sunday: any, monday: any, tuesday: any,
  // wednesday: any, thursday: any, friday: any, saturday: any

  let days: any[] = [];
  // useEffect(() => {
  function changeWeek() {
    setSunday(sundayS?.toISOString().slice(0, 10));
    const mondayDate = sundayS && new Date(sundayS);
    mondayDate?.setDate(mondayDate?.getDate() + 1);
    setMonday(mondayDate?.toISOString().slice(0, 10));
    //  monday =  mondayDate?.toISOString().slice(0, 10)

    const tuesdayDate = sundayS && new Date(sundayS);
    tuesdayDate?.setDate(tuesdayDate?.getDate() + 2);
    setTuesday(tuesdayDate?.toISOString().slice(0, 10));

    const wednesdayDate = sundayS && new Date(sundayS);
    wednesdayDate?.setDate(wednesdayDate?.getDate() + 3);
    setWednesday(wednesdayDate?.toISOString().slice(0, 10));

    const thursdayDate = sundayS && new Date(sundayS);
    thursdayDate?.setDate(thursdayDate?.getDate() + 4);
    setThursday(thursdayDate?.toISOString().slice(0, 10));

    const fridayDate = sundayS && new Date(sundayS);
    fridayDate?.setDate(fridayDate?.getDate() + 5);
    setFriday(fridayDate?.toISOString().slice(0, 10));

    const saturdayDate = sundayS && new Date(sundayS);
    saturdayDate?.setDate(saturdayDate?.getDate() + 6);
    setSaturday(saturdayDate?.toISOString().slice(0, 10));
  }

  let sundayData: any,
    mondayData: any,
    tuesdayData,
    wednesdayData,
    thursdayData,
    fridayData,
    saturdayData;

  const getData = async () => {
    const getDay = async (day: string, dayStr: string, setFunc: any) => {
      if (day) {
        sundayData = await axios.get(
          `/api-sugar/get-${dayStr}?${dayStr}=${day}`
        );
        setFunc(sundayData.data);
        // console.log(dayStr, sundayData.data);
      }
    };
    try {
      await getDay(sunday, "sunday", setSun);
      await getDay(monday, "monday", setMon);
      await getDay(tuesday, "tuesday", setTue);
      await getDay(wednesday, "wednesday", setWed);
      await getDay(thursday, "thursday", setThu);
      await getDay(friday, "friday", setFri);
      await getDay(saturday, "saturday", setSat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      sunday ||
      monday ||
      tuesday ||
      wednesday ||
      thursday ||
      friday ||
      saturday
    ) {
      getData();
    }
  }, [sunday, monday, tuesday, wednesday, thursday, friday, saturday]);

  useEffect(() => groupDay(sun, setSunDetails), [sun]);
  useEffect(() => groupDay(mon, setMonDetails), [mon]);
  useEffect(() => groupDay(tue, setTueDetails), [tue]);
  useEffect(() => groupDay(wed, setWedDetails), [wed]);
  useEffect(() => groupDay(thu, setThuDetails), [thu]);
  useEffect(() => groupDay(fri, setFriDetails), [fri]);
  useEffect(() => groupDay(sat, setSatDetails), [sat]);

  const groupDayByTime = (day: any[]) => {
    try {
      const groupByTime =
        day &&
        day.reduce((results: any, current: any) => {
          const key = current.time.slice(0, 5);

          if (!results[key]) {
            results[key] = [];
          }

          results[key].push(current);

          return results;
        }, {});
      return groupByTime;
    } catch (error) {
      console.log(error);
    }
  };

  const groupDay = (
    day: any[],
    setDay: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    let insulinArray = [];
    let sugarArray = [];
    const group = groupDayByTime(day);

    const keysSun = group && Object.keys(group);

    for (let i = 0; i < keysSun?.length; i++) {
      insulinArray.push(group[keysSun[i]][0].insulin);
      sugarArray.push(group[keysSun[i]][0].suger);
    }

    const totalInsulin = insulinArray.reduce((total, cur) => total + cur, 0);
    const totalSugar = sugarArray.reduce((total, cur) => total + cur, 0);
    const averageSugar = Number(totalSugar) / sugarArray.length;

    const carboArray = [];

    for (let i = 0; i < day.length; i++) {
      carboArray.push(day[i].carbohydrates);
    }

    const totalCarbo = carboArray.reduce((total, cur) => total + cur, 0);

    day ? setDay([averageSugar, totalInsulin, totalCarbo]) : setDay([]);
  };

  function allDays() {
    try {
      groupDay(sun, setSunDetails);

      groupDay(mon, setMonDetails);

      groupDay(tue, setTueDetails);

      groupDay(wed, setWedDetails);

      groupDay(thu, setThuDetails);

      groupDay(fri, setFriDetails);

      groupDay(sat, setSatDetails);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="top">
        <div className="V">V</div>
        <h1>יומן</h1>
        <div className="X">X</div>
      </div>

      <NavDaybook />
      <div className="getWeek">
        <button onClick={() => handleChangeDate(7)}>+</button>
        <h1>
          {fullSunday} - {fullSaturday}
        </h1>
        <button onClick={() => handleChangeDate(-7)}>-</button>
      </div>
      <div className="bars">
        {SunDetails.length > 0 ||
        MonDetails.length > 0 ||
        TueDetails.length > 0 ||
        WedDetails.length > 0 ||
        ThuDetails.length > 0 ||
        FriDetails.length > 0 ||
        SatDetails.length > 0 ? (
          <Sugar
            SunDetails={SunDetails[0]}
            MonDetails={MonDetails[0]}
            TueDetails={TueDetails[0]}
            WedDetails={WedDetails[0]}
            ThuDetails={ThuDetails[0]}
            FriDetails={FriDetails[0]}
            SatDetails={SatDetails[0]}
          />
        ) : null}

        {SunDetails.length > 0 ||
        MonDetails.length > 0 ||
        TueDetails.length > 0 ||
        WedDetails.length > 0 ||
        ThuDetails.length > 0 ||
        FriDetails.length > 0 ||
        SatDetails.length > 0 ? (
          <Carbo
            SunDetails={SunDetails[2]}
            MonDetails={MonDetails[2]}
            TueDetails={TueDetails[2]}
            WedDetails={WedDetails[2]}
            ThuDetails={ThuDetails[2]}
            FriDetails={FriDetails[2]}
            SatDetails={SatDetails[2]}
          />
        ) : null}

        {SunDetails.length > 0 ||
        MonDetails.length > 0 ||
        TueDetails.length > 0 ||
        WedDetails.length > 0 ||
        ThuDetails.length > 0 ||
        FriDetails.length > 0 ||
        SatDetails.length > 0 ? (
          <Insulin
            SunDetails={SunDetails[1]}
            MonDetails={MonDetails[1]}
            TueDetails={TueDetails[1]}
            WedDetails={WedDetails[1]}
            ThuDetails={ThuDetails[1]}
            FriDetails={FriDetails[1]}
            SatDetails={SatDetails[1]}
          />
        ) : null}
      </div>
    </>
  );
};
