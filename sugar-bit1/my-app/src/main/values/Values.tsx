import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Navbar } from '../Navbar';
import { Favorites } from '../favorites/Favorites';
import { Home } from '../home/Home';
import '../../style/values.scss';
import { selectedValues, valuesDetails } from '../../slices/valuesSlice';
import { ValuesCard } from './ValuesCard';
import { allValuesAsync } from '../../api/valuesAPI';
import { selectedCalender } from '../../slices/calenderStartSlice';
import { addCalenderAsync } from '../../api/addCalenderAPI';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const Values = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState<any>([]);
  const [search, setSearch] = useState<any>([])
  const dispatch = useAppDispatch()
  const allValuesSelected = useAppSelector(selectedValues);
  const selectedStart = useAppSelector(selectedCalender)
  const selectedCalenderRes = useAppSelector(selectedCalender)

  
  const onChangeHandler = (text: string) => {
    let matches: valuesDetails[] | undefined = [] ;
    if(text.length > 0){
      matches = allValuesSelected?.filter((value: any )=> {
        const rejex = new RegExp(`${text}`, 'gi')
        return value.name.match(rejex)
      })
    }
    console.log(matches);
   
    
    setSuggestion(matches)
    setText(text)
  }

  useEffect(()=>{
    dispatch(allValuesAsync())
  },[])

  const onSuggestHandler = (value:any)=> {
    setText(value)
    setSuggestion([])
    
  }

  const handleSearch = (ev:any) => {
    ev.preventDefault()
    let search1 = ev.target.elements
    search1 = search1.search.value;
    console.log(search1);
    const result = allValuesSelected?.filter((value: any) => value.name === search1)
    console.log(result);
      if(result?.length  !== undefined){
    setSearch(result)
    console.log(search)};
    
  }
  const handleNavigate = ()=> {
    navigate('/private-value')
  }
  const handleAddCalender = () => {
    try {
      const allDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const split = allDate.split(" ")
      const time = split[1]
      const date = split[0]
      console.log(date);
      console.log(time);
      
      selectedStart.forEach((value: any) => {
        const name = value.name
        const unit = value.unit
        const grams = value.grams
        const carbohydrates = value.carbohydrates
        const withprotein = value.withprotein;
        dispatch(addCalenderAsync({name, unit, grams, date, time, carbohydrates, withprotein}))

      })
      //  name, unit, grams, date, carbohydrates, withprotein
      console.log(selectedCalenderRes);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
<>
    <div className="top">
        <button className='v' onClick={handleAddCalender}>v</button>
        <div className="insert"><h1>פחמימות</h1>
          {(selectedStart as any).reduce((acc: any, cur: any) =>{
           return acc + cur.carbohydrates
           }, 0)}</div>
        <button className='x'>x</button>
    </div>
    <Navbar/>
    <div className="searchBar">
    <form onSubmit={handleSearch}>
      <input type="text" placeholder='חיפוש' name='search'
       onChange={ev => onChangeHandler(ev.target.value)}
       value={text}/>
      <input type="submit" hidden />
    </form>
    <button onClick={handleNavigate}>+</button>
    </div>
    <div className="suggestions">
    { suggestion !== null && suggestion.map((offer: any)=> {
      return( <div onClick={()=>onSuggestHandler(offer.name)}>{offer.name}</div>)
    })}
    </div>
    <div className="allValues">
    { search.length !== 0 ? 
        search.map((value:any, index: number) => {
          return <ValuesCard key={index}
                          name={value.name}
                          unit={value.unit}
                          Weight={value.Weight} 
                          carbohydrates={value.carbohydrates}
                          withprotein={value.withprotein}
                          id2={index}/>
        }): allValuesSelected && Array.isArray(allValuesSelected) ? allValuesSelected.map((value: any, index: number) => {
          return <ValuesCard key={index}
                        name={value.name}
                        unit={value.unit}
                        Weight={value.Weight} 
                        carbohydrates={value.carbohydrates}
                        withprotein={value.withprotein}
                        id2={index}/>
                        
      })
        : console.log('no array')
        }

    </div>
</>
  )
}
