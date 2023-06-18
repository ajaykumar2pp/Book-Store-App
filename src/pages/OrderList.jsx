import React from 'react'
import Order from './Order'

const OrderList = ({orders}) => {
  return (
    <div>
    <h2>Orders List</h2>
    {orders.length === 0 ? (
      <p>No orders available.</p>
    ) : (
      <div>
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    )}
  </div>
  )
}

export default OrderList