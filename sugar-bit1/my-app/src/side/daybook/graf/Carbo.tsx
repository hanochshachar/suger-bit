import React, { useEffect } from 'react';

interface week {
  SunDetails: any[];
  MonDetails: any[];
  TueDetails: any[];
  WedDetails: any[];
  ThuDetails: any[];
  FriDetails: any[];
  SatDetails: any[];
}

export const Carbo = ({
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
        const car = Number(details) / 3
        day.style.height = `${car}px`;
      }
      const max = height - 20
      day.style.maxHeight = `${max}px`
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    changeHeight("1barC", SunDetails);
    changeHeight("2barC", MonDetails);
    changeHeight("3barC", TueDetails);
    changeHeight("4barC", WedDetails);
    changeHeight("5barC", ThuDetails);
    changeHeight("6barC", FriDetails);
    changeHeight("7barC", SatDetails);
  });

  return (
    <>
      <div className="allWeekIns">
        <h6>סה"כ פחמימות יומי</h6>
        <div className="allDaysIns">
          <div className="day">
            <div className="1barC bar"></div>
            <h4>א</h4>
          </div>
          <div className="day">
            <div className="2barC bar"></div>
            <h4>ב</h4>
          </div>
          <div className="day">
            <div className="3barC bar"></div>
            <h4>ג</h4>
          </div>
          <div className="day">
            <div className="4barC bar"></div>
            <h4>ד</h4>
          </div>
          <div className="day">
            <div className="5barC bar"></div>
            <h4>ה</h4>
          </div>
          <div className="day">
            <div className="6barC bar"></div>
            <h4>ו</h4>
          </div>
          <div className="day">
            <div className="7barC bar"></div>
            <h4>ז</h4>
          </div>
        </div>
      </div>
    </>
  );
}
