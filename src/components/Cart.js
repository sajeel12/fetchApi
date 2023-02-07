import React from 'react'

import { Card, Col, Row } from 'antd';



function Cart(props) {
  return (
    
      
    <Col span={6}>
      <Card title="cart" bordered={false}>
        <div>
          Id = {props.cart.id}

        </div>
         User Id {props.cart.userId}
        <div>
         Date {props.cart.date}
         <div>
         Products quantity {props.cart.products[0].quantity}
         </div>

        </div>
      </Card>
    </Col>
   
  
  )
}

export default Cart