import React from 'react';

interface totalValues {
    averageSugar: number,
    totalCarbo: number,
    totalInsulin: number
  }

export const HomeDBTotal = ({averageSugar, totalCarbo, totalInsulin}: totalValues) => {
  return (
    <div className='calculate'>
    <h4> יחידות {totalInsulin}</h4>
    <h4> גרם {totalCarbo}</h4>
    <h4> ממוצע {averageSugar}</h4>
    <h4> סיכום <br /> יומי</h4>

  </div>
  )
}
