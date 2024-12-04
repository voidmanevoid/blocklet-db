import middlewares from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';
import $post from './$post';

const exportRouter = Router();

exportRouter.post('/', middlewares.session(), $post);

export default exportRouter;
