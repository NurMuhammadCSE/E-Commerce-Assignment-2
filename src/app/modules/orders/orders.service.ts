import { TOrder } from "./orders.interface";
import { Order } from "./orders.model";

const createOrder = async(orderData: TOrder) => {
    const newOrder = new Order(orderData);
    const result = await newOrder.save();
    return result;
}


export const OrderServices = {
    createOrder
}