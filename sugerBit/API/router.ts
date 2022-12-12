import express from 'express';
import { login } from './controllers/loginCont';
import { privateValuePost } from './controllers/privateValueCont';
import { addUser } from './controllers/regCont';
import { selectAllValues } from './controllers/valuesCont';
const router = express.Router();

router.post('/add-user', addUser)
      .get('/login', login)
      .get('/all-values', selectAllValues)
      .post('/private-value', privateValuePost)


export default router;