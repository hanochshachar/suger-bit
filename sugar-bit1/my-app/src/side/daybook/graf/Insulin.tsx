import React, { useEffect } from "react";
import "../../../style/homeDB.scss";

interface week {
  SunDetails: any[];
  MonDetails: any[];
  TueDetails: any[];
  WedDetails: any[];
  ThuDetails: any[];
  FriDetails: any[];
  SatDetails: any[];
}

export const Insulin = ({
  SunDetails,
  MonDetails,
  TueDetails,
  WedDetails,
  ThuDetails,
  FriDetails,
  SatDetails,
}: week) => {
  const changeHeight = (classNam: string, details: any) => {
    try {
      const day = document.getElementsByClassName(
        `${classNam}`
      )[0] as HTMLElement;

      const allWeekClass = document.getElementsByClassName(
        "allWeek"
      )[0] as HTMLElement;
      const height = allWeekClass?.offsetHeight;
      if (details) {
        day.style.height = `${Number(details)}px`;
      }
      const max = height - 20
      day.style.maxHeight = `${max}px`
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    changeHeight("1barI", SunDetails);
    changeHeight("2barI", MonDetails);
    changeHeight("3barI", TueDetails);
    changeHeight("4barI", WedDetails);
    changeHeight("5barI", ThuDetails);
    changeHeight("6barI", FriDetails);
    changeHeight("7barI", SatDetails);
  });

  return (
    <>
      <div className="allWeekIns">
        <h6>סה"כ אינסולין יומי</h6>
        <div className="allDaysIns">
          <div className="day">
            <div className="1barI barIns"></div>
            <h4>א</h4>
          </div>
          <div className="day">
            <div className="2barI barIns"></div>
            <h4>ב</h4>
          </div>
          <div className="day">
            <div className="3barI barIns"></div>
            <h4>ג</h4>
          </div>
          <div className="day">
            <div className="4barI barIns"></div>
            <h4>ד</h4>
          </div>
          <div className="day">
            <div className="5barI barIns"></div>
            <h4>ה</h4>
          </div>
          <div className="day">
            <div className="6barI barIns"></div>
            <h4>ו</h4>
          </div>
          <div className="day">
            <div className="7barI barIns"></div>
            <h4>ז</h4>
          </div>
        </div>
      </div>
    </>
  );
};
