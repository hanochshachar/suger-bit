import express from 'express';
import { addToCalender } from './controllers/addCalenderCont';
import { addTargetCont, getTargetCont, UpdateTargetCont } from './controllers/addTargetCont';
import { addToFavorites } from './controllers/addToFavorites';
import { calenderByDay } from './controllers/calenderByDayCont';
import { deleteDaybook } from './controllers/deleteDaybookCont';
import { getFavorites } from './controllers/getFavorites';
import { insertValueHome } from './controllers/insertValueHomeCont';
import { addInsulin, addSugar } from './controllers/insulinSugarCont';
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
      .delete('/delete-daybook', deleteDaybook)
      .post('/insert-value-home', insertValueHome)
      .post ('/insert-sugar', addSugar)
      .post('/insert-insulin', addInsulin)
      .post('/add-target', addTargetCont)
      .get('/get-target', getTargetCont)
      .post('/update-target', UpdateTargetCont)


export default router;