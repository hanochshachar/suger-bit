import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import '../../style/values.scss';
import { addPrivateAsync } from '../../api/privateValueAPI';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectedPrivateValue } from '../../slices/privateValueSlice';

export const InsertValue = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const selected = useAppSelector(selectedPrivateValue)
    const handleAddFavorites = () => {

    }
    const handleSubmit = (ev: any)=> {
        ev.preventDefault()
        console.log();
        
        try {
            let {name, unit, grams, carbohydrates, Fats,
                 proteins, calories, Cholesterol } = ev.target.form.elements;
                name = name.value;
                unit = unit.value;
                grams = grams.value;
                carbohydrates = carbohydrates.value;
                Fats = Fats.value;
                proteins = proteins.value;
                calories = calories.value;
                Cholesterol = Cholesterol.value;
                
            dispatch(addPrivateAsync({name, unit, grams, carbohydrates,
                 Fats, proteins, calories, Cholesterol}))

                navigate('/values')
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(selected)
  return (
    <div>
        <div className="top">
        <input type="submit" value="v" form='insert-value' onClick={handleSubmit}/>
        <div className="insert"><h1>הזן ערכים</h1></div>
        <button onClick={() => window.location.reload()}>x</button>
    </div>
    <div className="addFavorites">
        <button onClick={handleAddFavorites}>*</button>
    </div>
        <form id='insert-value'>
            <div className="namedivPrvt">
            <input className='namePrivate' type="text" name='name' placeholder='הזן שם לפריט' required />
            </div>
            <div className="detailsPrivate">
            <div className='detailsPrivate_1'>
                 <input type="number" name="carbohydrates" placeholder='פחמימות' required />
                 <input type="number" name="Fats" placeholder='שומנים' />
                 <input type="number" name="proteins" placeholder='חלבונים' required/>
                 <input type="number" name="calories" placeholder='קלוריות' />
                 <input type="number" name="Cholesterol" placeholder='כולסטרול' />
            </div>
            <div className='detailsPrivate_2'>
                <select name="unit" required defaultValue='בסיס'>
                <option value="בסיס" disabled>בסיס</option>
                    <option value="מנה">מנה</option>
                    <option value="צלחת">צלחת</option>
                    <option value="יחידה">יחידה</option>
                    <option value="כפית">כפית</option>
                </select>
                <input type="number" name="grams" placeholder='משקל' required/>
            </div>
            </div>
        </form>
    </div>
  )
}
