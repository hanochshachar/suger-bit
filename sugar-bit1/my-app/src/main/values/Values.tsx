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
import side from '../../images/side.png'
import V from '../../images/V.png'
import X from '../../images/X.png';
import apple from '../../images/apple.png';
import plus from '../../images/plus.png'
import { Side } from '../../side/Side';

export const Values = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState<any>([]);
  const [search, setSearch] = useState<any>([])
  const [sideBool, setSideBool] = useState<boolean>(false);
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
    // document.forms["searchForm"].submit()
    
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

  const sumCarbo = (selectedStart as any).reduce((acc: any, cur: any) =>{
    return  acc + cur.carbohydrates
  }, 0)

  return (
<>
    <div className="top">
        <div className="topCenter">

        <div className='v' onClick={handleAddCalender}><img src={V} alt="" /></div>
        <div className="insert">
          <img className='topApple' src={apple} alt="" />
          <h3 className='sumTop'>{sumCarbo}</h3>
          <h2 className='car'>פחמימות</h2>
          </div>
        <div className='x'><img src={X} alt="" /></div>
        </div>
        <div className="menuBtn" onClick={() => setSideBool(true)}>
          <img className="menuImg" src={side} alt="" />
        </div>
    </div>
    {sideBool === true && <div className="side">
      <Side setSideBool={setSideBool}/>
      </div>  }
    <Navbar/>
    <div className="searchBar">
    <form autoComplete="off" onSubmit={handleSearch} name='searchForm'>
      <input className='search' type="text" placeholder='חיפוש' name='search'
       onChange={ev => onChangeHandler(ev.target.value)}
       value={text}/>
      <input type="submit" hidden />
    </form>
    <div onClick={handleNavigate}><img className='addToList' src={plus} alt="" /></div>
    </div>
    <div className="suggestions">
    { suggestion !== null && suggestion.map((offer: any)=> {
      return( <div className='suggest'
      // 
       onClick={()=>{onSuggestHandler(offer.name) }}>{offer.name}</div> )
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
