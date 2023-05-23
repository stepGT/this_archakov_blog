import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import { registerValidation, loginValidation, postCreateValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.7nouj.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log(`DB error: ${err}`));

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get('/auth/me', checkAuth, UserController.getMe);
app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get('/posts', PostController.getAll);
app.get('/post/:id', PostController.getOne);
app.post('/post', checkAuth, postCreateValidation, PostController.create);
app.delete('/post/:id', checkAuth, PostController.remove);
app.patch('/post/:id', checkAuth, PostController.update);

app.listen(4444, (err) => {
  if (err) return console.log(err);
  console.log('Server OK');
});
