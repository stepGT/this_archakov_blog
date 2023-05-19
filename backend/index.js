import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import { getMe, login, register } from './controllers/UserController.js';

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.7nouj.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log(`DB error: ${err}`));

const app = express();
app.use(express.json());

app.get('/auth/me', checkAuth, getMe);

app.post('/auth/login', loginValidation, login);

app.post('/auth/register', registerValidation, register);

app.listen(4444, (err) => {
  if (err) return console.log(err);
  console.log('Server OK');
});
