import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import PostController from './app/controllers/PostController';
import CountController from './app/controllers/CountController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/posts', PostController.store);
routes.put('/posts', PostController.update);
routes.delete('/posts/:id', PostController.delete);
routes.get('/posts', PostController.index);
routes.get('/count', CountController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files/:id', FileController.index);

export default routes;
