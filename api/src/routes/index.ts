import middlewares from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';

import exportRouter from './export';

const router = Router();

router.use('/user', middlewares.session(), (req, res) => res.json(req.user || {}));
router.use('/export', middlewares.session(), exportRouter);


export default router;
