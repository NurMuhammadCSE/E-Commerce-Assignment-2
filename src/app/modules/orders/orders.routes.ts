import express from "express";
import { OrderController } from "./orders.controller";

const router = express.Router();

router.post('/orders', OrderController.createOrder)

export const OrderRoutes = router;