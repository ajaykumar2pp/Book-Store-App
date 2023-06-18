import React from 'react'

const Order = ({order}) => {
  return (
    <div>
    <h3>Order Details</h3>
    <p>Order ID: {order.id}</p>
    <p>Date: {order.date}</p>
    <ul>
      {order.items.map((item) => (
        <li key={item.id}>
          {item.title} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Order