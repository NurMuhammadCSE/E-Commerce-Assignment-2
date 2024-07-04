import { Request, Response } from "express";
import { OrderServices } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);

    res.status(200).json({
      success: true,
      message: "Order Create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not create order",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
};
