import React from 'react';
import '../../../../src/style/homeDB.scss'


interface firstValue {
  name: string;
  sugar: number;
  insulin: number;
  carbohydrates: number;
  id: number[];
}

export const HomeDBCard = ({
  name,
  sugar,
  insulin,
  carbohydrates,
  id,
}: firstValue ) => {
  return (
    <div>
      <div className="total">
      <h1> אינסולין {insulin}</h1>
      <h1> פחמימות {carbohydrates}</h1>
      <h1> סוכר {sugar}</h1>
      <h1>{name}</h1>
      </div>
    </div>
  )
}
