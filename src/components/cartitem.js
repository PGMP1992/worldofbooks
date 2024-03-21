import React, {useState} from 'react'

export default function CartItem(props) {
  const{cartid, title,author,price,type,number,sum}=props
  
  if (cartid>0)
  {
  return(
      <div style={{fontSize:12}}>
      <label style={{fontWeight:"bold", fontSize:15}}>{title}<br/></label>
      price: ${price}<br/>
      author:{author}
      number: {number}<br/>
      <label style={{fontWeight:"bold", fontSize:14}}>sum: ${sum.toFixed(2)}</label><br/>
      ------------------------------
      </div>
    );
  }
  else
  {
    return(
      <p>Your cart is empty</p>
    )
  }
}
