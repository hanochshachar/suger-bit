import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from '../home/Home';
import { Values } from '../values/Values';
import '../../style/favorites.scss'
import { useDispatch } from 'react-redux';
// import { useAppSelector } from '../';../App/hooks
import { getFavoritesSelected } from '../../slices/getFavoritesSlice';
import { getFavorites } from '../../api/favoritesAPI';
// import { AppDispatch } from '../../../app/store';
import { FavoritesCard } from './FavoritesCard';
import {detailsFavorites}from '../../slices/getFavoritesSlice'
import { selectedCalender } from '../../slices/calenderStartSlice';
import { addCalenderAsync } from '../../api/addCalenderAPI';
import { AppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import { error } from 'console';
import side from '../../images/side.png'
import V from '../../images/V.png'
import X from '../../images/X.png'


 
export const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>()
  const favoritesSelected = useAppSelector(getFavoritesSelected);
  const selectedStart = useAppSelector(selectedCalender)
  const [search, setSearch] = useState<any>([])
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState<any>([]);
  const selectedCalenderRes = useAppSelector(selectedCalender)
  
  const navigate = useNavigate()
  useEffect(()=> {
    dispatch(getFavorites())
  }, [])
  
  const handleSearch = (ev:any) => {
    ev.preventDefault()
    let search1 = ev.target.elements
    search1 = search1.search.value;
    console.log(search1);
    const result = favoritesSelected?.filter((value: any) => value.name === search1)
    console.log(result);
      if(result?.length  !== undefined){
    setSearch(result)
    };
    
  }

  const onChangeHandler = (text: string) => {
    let matches: detailsFavorites[] | undefined = [] ;
    if(text.length > 0){
      matches = favoritesSelected?.filter((value: any) => {
        const rejex = new RegExp(`${text}`, 'gi')
        return value.name.match(rejex)
      })
    }
    setSuggestion(matches)
    setText(text)
         }

         const onSuggestHandler = (value:any)=> {
          setText(value)
          setSuggestion([])
          
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
        <div className="v" onClick={handleAddCalender}><img src={V} alt="" /></div>
        <div className="insert"><h2>פחמימות</h2> <br/>
        {(selectedStart as any).reduce((acc: any, cur: any) =>{
           return acc + cur.carbohydrates
           }, 0)}</div>
        <div className="x"><img src={X} alt="" /></div>
        <div className="menuBtn"><img className="menuImg" src={side} alt="" /></div>
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

    <div className="allFavorites">
      {search.length > 0 ? search.map((value: any, index: number) => {
      return ( 
        <div className="favoritesOne">
        <FavoritesCard key={index} id={value.id} name={value.name} unit={value.unit}
         grams={value.grams} carbohydrates={value.carbohydrates}
          withprotein={value.withprotein} usercookie={value.usercookie}
          image={value.image}/>
         </div>)}): favoritesSelected && Array.isArray(favoritesSelected) ? 
         favoritesSelected?.map((value: any, index: number) => {
      return ( 
        <div className="favoritesOne">
        <FavoritesCard key={index} id={value.id} name={value.name} unit={value.unit}
         grams={value.grams} carbohydrates={value.carbohydrates}
          withprotein={value.withprotein} usercookie={value.usercookie}
          image={value.image}/>
         </div>
      )
    })
    : console.log('no array')
    }
    
    
     </div>
</>

  )
}
