import express from 'express';
import UserRoutes from "./UserRoutes/index.js"
import TaskRoutes from "./TaskRoutes/index.js"
import ManagerRoutes from "./ManagerRoutes/index.js"
import AdminRoutes from "./AdminRoutes/index.js"

const router=express.Router();
router.use('/user',UserRoutes)
router.use('/admin',AdminRoutes)
router.use('/manager',ManagerRoutes)

router.use('/tasks',TaskRoutes)


export default router;