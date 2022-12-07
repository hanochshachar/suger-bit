import express from 'express';
import { login } from './controllers/loginCont';
import { addUser } from './controllers/regCont';
const router = express.Router();

router.post('/add-user', addUser)
      .get('/login', login)


export default router;