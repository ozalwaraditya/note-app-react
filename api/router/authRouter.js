import express from 'express'
import { CreateAccount, GetUser, login } from '../controller/authController.js';
import { authenticateToken } from '../utils/authenticateToken.js';

const Router = express.Router();

Router.get("/get-user",authenticateToken,GetUser)
Router.post('/create-account',CreateAccount);
Router.post('/login',login);


export default Router;