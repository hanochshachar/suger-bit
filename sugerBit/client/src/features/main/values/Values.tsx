import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Navbar } from '../Navbar';
import { Favorites } from '../favorites/Favorites';
import { Home } from '../home/Home';
import '../../../style/values.scss';
import { selectedValues, valuesDetails } from '../../slices/valuesSlice';
import { ValuesCard } from './ValuesCard';
import { allValuesAsync } from '../../api/valuesAPI';

export const Values = () => {
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState<any>([]);
  const [search, setSearch] = useState<any>([])
  const dispatch = useAppDispatch()
  const allValuesSelected = useAppSelector(selectedValues);
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
  return (
<>
    <div className="top">
        <div className="v">v</div>
        <div className="insert"><h1>פחמימות</h1></div>
        <div className="x">x</div>
    </div>
    <Navbar/>
    <form onSubmit={handleSearch}>
      <input type="text" placeholder='חיפוש' name='search'
       onChange={ev => onChangeHandler(ev.target.value)}
       value={text}/>
      <input type="submit" hidden />
    </form>
    <div className="suggestions">
    { suggestion !== null && suggestion.map((offer: any)=> {
      return( <div onClick={()=>onSuggestHandler(offer.name)}>{offer.name}</div>)
    })}
    </div>
    <div className="allValues">
    { search.length !== 0 ? 
        search.map((value:any) => {
          return <ValuesCard key={value.id2}
                          name={value.name}
                          unit={value.unit}
                          Weight={value.Weight} 
                          carbohydrates={value.carbohydrates}
                          withprotein={value.withprotein}
                          id2={value.id2}/>
        }): allValuesSelected?.map((value) => {
          return <ValuesCard key={value.id2}
                        name={value.name}
                        unit={value.unit}
                        Weight={value.Weight} 
                        carbohydrates={value.carbohydrates}
                        withprotein={value.withprotein}
                        id2={value.id2}/>
                        
      })}

    </div>
</>
  )
}
