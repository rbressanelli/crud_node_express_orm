import { Router } from 'express';
import { createUserController, getUsersController } from './controllers';
import loginUserController from './controllers/user/loginUser.controller';
import { authUser, validateSchema } from './middlewares';
import { createUserSchema, loginUserSchema } from './schemas';

const router = Router();

router.post('/users', validateSchema(createUserSchema), createUserController);

router.post('/login', validateSchema(loginUserSchema), loginUserController);

router.get('/users', authUser, getUsersController);

export default router;
