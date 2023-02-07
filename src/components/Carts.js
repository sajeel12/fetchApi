import React, { useState, useEffect } from 'react'
import {  Row } from 'antd';

import Cart from './Cart'




function Carts() {

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const cartsFromServer = await fetchCarts()

      setCarts(cartsFromServer)

    }
    getCart()
  }, [])

  const fetchCarts = async () => {
    const res = await fetch('http://fakestoreapi.com/carts')

    const data = await res.json()
    return data
  }






  return (
    <div>

      <Row gutter={24}>
      {carts.map((cart, index) => (
        <Cart key={cart.id} cart={cart} />
      ))}

    </Row>

    </div >

    
  )
}

export default Carts