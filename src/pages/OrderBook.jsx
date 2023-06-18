import React from 'react'
import { useSelector } from 'react-redux';
import OrderList from './OrderList';

const OrderBook = () => {
    const orders = useSelector((state) => state.order.orders);
  return (
    <div>
    <h1>Orders Book</h1>
    <OrderList orders={orders} />
  </div>
  )
}

export default OrderBook