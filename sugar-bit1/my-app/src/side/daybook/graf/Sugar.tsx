import React, { useEffect, useMemo, useState } from "react";
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

export const Sugar = ({
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
      const day = document.getElementsByClassName(`${classNam}`)[0] as HTMLElement;
      const allWeekClass = document.getElementsByClassName(
        "allWeek"
      )[0] as HTMLElement;
      const height = allWeekClass?.offsetHeight;
      if ( details) {
    
        day.style.height = `${Number(details) * 1.5}px`;
      }
      const max = height - 20
      day.style.maxHeight = `${max}px`
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    changeHeight('1bar' ,SunDetails)
    changeHeight('2bar', MonDetails)
    changeHeight('3bar', TueDetails)
    changeHeight('4bar', WedDetails)
    changeHeight('5bar', ThuDetails)
    changeHeight('6bar', FriDetails)
    changeHeight('7bar', SatDetails)
    
    
  })

  // console.log(SunDetails,
  //   MonDetails,
  //   TueDetails,
  //   WedDetails,
  //   ThuDetails,
  //   FriDetails,
  //   SatDetails,);

  return (
    <>

      <div className="allWeek">
        <h6>ממוצע סוכר יומי</h6>
        <div className="allDays">
        <div className="day">
          <div className="1bar bar"></div>
          <h4>א</h4>
        </div>
        <div className="day">
          <div className="2bar bar"></div>
          <h4>ב</h4>
        </div>
        <div className="day">
          <div className="3bar bar"></div>
          <h4>ג</h4>
        </div>
        <div className="day">
          <div className="4bar bar"></div>
          <h4>ד</h4>
        </div>
        <div className="day">
          <div className="5bar bar"></div>
          <h4>ה</h4>
        </div>
        <div className="day">
          <div className="6bar bar"></div>
          <h4>ו</h4>
        </div>
        <div className="day">
          <div className="7bar bar"></div>
          <h4>ז</h4>
        </div>
        </div>
      </div>
    </>
  );
};
