import { Router } from 'express';
import { createUserController, deleteUserController, getProfileController, getUsersController, updateUserController } from './controllers';
import loginUserController from './controllers/user/loginUser.controller';
import { admUserCheck, authUser, validateSchema } from './middlewares';
import { createUserSchema, loginUserSchema, updateUserSchema } from './schemas';

const router = Router();

router.post('/users', validateSchema(createUserSchema), createUserController);

router.post('/login', validateSchema(loginUserSchema), loginUserController);

router.get('/users', authUser, admUserCheck, getUsersController);

router.get('/users/profile', authUser, getProfileController);

router.patch('/users/:uuid', authUser, admUserCheck, validateSchema(updateUserSchema), updateUserController);

router.delete('/users/:uuid', authUser, admUserCheck, deleteUserController);

export default router;
