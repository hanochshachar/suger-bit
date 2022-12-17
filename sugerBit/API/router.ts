import express from 'express';
import { addToCalender } from './controllers/addCalenderCont';
import { addToFavorites } from './controllers/addToFavorites';
import { calenderByDay } from './controllers/calenderByDayCont';
import { getFavorites } from './controllers/getFavorites';
import { login } from './controllers/loginCont';
import { privateValuePost } from './controllers/privateValueCont';
import { addUser } from './controllers/regCont';
import { selectAllValues } from './controllers/valuesCont';
const router = express.Router();

router.post('/add-user', addUser)
      .get('/login', login)
      .get('/all-values', selectAllValues)
      .post('/private-value', privateValuePost)
      .post('/add-favorites', addToFavorites)
      .get('/get-favorites', getFavorites)
      .post('/add-to-calender', addToCalender)
      .get('/get-calender', calenderByDay)


export default router;