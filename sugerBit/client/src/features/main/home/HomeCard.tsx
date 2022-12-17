import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getCalenderAsync } from '../../api/getCalenderAPI'
import { getCalenderSelected } from '../../slices/getCalenderSlice';
import "../../../style/home.scss";
interface firstValue{
    name: string,
    sugar: number,
    insulin: number,
    carbohydrates: number
}

export const HomeCard = ({name, sugar, insulin, carbohydrates}: firstValue) => {
    const [SugarBool, setSugarBool] = useState<boolean>(false);
    const [insulinBool, setInsulinBool] = useState<boolean>(false)
    
  return (
    <div className='total'>
        <h1>{insulin}</h1>
        <h1>{carbohydrates}</h1>
        <h1>{sugar}</h1>
        <h1>{name}</h1>
    </div>
  )
}
