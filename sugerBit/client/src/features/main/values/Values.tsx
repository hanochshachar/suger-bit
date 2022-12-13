import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Navbar } from '../Navbar';
import { Favorites } from '../favorites/Favorites';
import { Home } from '../home/Home';
import '../../../style/values.scss';
import { selectedValues, valuesDetails } from '../../slices/valuesSlice';
import { ValuesCard } from './ValuesCard';
import { allValuesAsync } from '../../api/valuesAPI';

export const Values = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState<any>([]);
  const [search, setSearch] = useState<any>([])
  const dispatch = useAppDispatch()
  const allValuesSelected = useAppSelector(selectedValues);
  console.log(allValuesSelected);
  
  const onChangeHandler = (text: string) => {
    let matches: valuesDetails[] | undefined = [] ;
    if(text.length > 0){
      matches = allValuesSelected?.filter(value => {
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
    const result = allValuesSelected?.filter(value => value.name === search1)
    console.log(result);
      if(result?.length  !== undefined){
    setSearch(result)
    console.log(search)};
    
  }
  console.log(search)
  const handleNavigate = ()=> {
    navigate('/private-value')
  }
  return (
<>
    <div className="top">
        <div className="v">v</div>
        <div className="insert"><h1>פחמימות</h1></div>
        <div className="x">x</div>
    </div>
    <Navbar/>
    <div className="searchBar">
      <button onClick={handleNavigate}>+</button>
    <form onSubmit={handleSearch}>
      <input type="text" placeholder='חיפוש' name='search'
       onChange={ev => onChangeHandler(ev.target.value)}
       value={text}/>
      <input type="submit" hidden />
    </form>
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
        }): allValuesSelected?.map((value, index: number) => {
          return <ValuesCard key={index}
                        name={value.name}
                        unit={value.unit}
                        Weight={value.Weight} 
                        carbohydrates={value.carbohydrates}
                        withprotein={value.withprotein}
                        id2={index}/>
                        
      })}

    </div>
</>
  )
}
