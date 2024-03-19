
import React,{useState,useRef ,useLayoutEffect,useEffect} from 'react'
import Menu from './menu.js'
import CartItem from './cartitem.js';
import './showcart.css'

export default function Showcart() {
const [Cart,setCart]=useState([{cartid:0}])
const [isButtonDisabled,setButtonDisabled]=useState(false);   
/*To ensure useLayoutEffetcs only runs before the page is rendered*/
useLayoutEffect(()=>
    {
      if(firstUpdate.current)
      {
          let copyCart=JSON.parse(sessionStorage.getItem("Cart"))
          if(copyCart)
          {
            setCart(copyCart);
            setButtonDisabled(false);
          }
          else
          {
            copyCart=([{cartid:0}])
            setCart(copyCart)
            setButtonDisabled(true);
           
          }
        firstUpdate.current=false;
        return;
      }
     })
const firstUpdate=useRef(true)
/*All items in Cart will be sent to CartItem for display with pops  */ 
const allItems=(value)=>
    {   
    return(
      <div  key={value.cartid}>
        <CartItem
          cartid={value.cartid}
          title={value.title}
          price={value.price}
          author={value.author}
          type={value.type}
          filling={value.filling}
          number={value.number}
          sum={value.sum}
        />
      </div>
     );
    }
     /*When user clicks on clear cart */
     function HandleClick()
     { /*Clear localStorage */
       sessionStorage.clear();
       let copyCart=[{cartid:0}]
       setCart(copyCart)
       setButtonDisabled(true)
       cartres=0;
     }
     function HandleClick2()
     {
       localStorage.clear();
       let copyCart=[{cartid:0}]
       setCart(copyCart)
       cartres=0;
       
     }
     const totalsum=()=>
    {
      let cartsum=0
      let cartres=0
      for(let i=0;i<Cart.length;i++)
      {
        cartsum+=Cart[i].sum
      }
        
      if (typeof(cartsum)!="number")
      {
        cartres=0
      }  
      else if (cartsum>0)
      {
        cartres=+cartsum
        cartres=cartsum.toFixed(2)
      }
     return cartres
    }
    let cartres=totalsum()
  return (
    <div>
        <Menu />
        <div className='cartpage' >
          <div >
              <h2>Cart</h2>
              {Cart.map(allItems)}
              <label style={{fontSize:17, fontWeight:"bold"} }>In total: ${cartres}<br/></label>
              <button onClick={HandleClick} disabled={isButtonDisabled}>ClearCart</button>
          </div>
          <div className='cartpage2'>
            <h2>Check out</h2>
            <h3>Info</h3>
            <p style={{fontSize:14, alignItems:"center"}}>
                Fill in name and email. Click on 'Check out'.<br/> You will get an email with <br/>
                confirmation and details about payment.<br/> When you click on check out your <br/>
                cart will be emptied.<br/> Thank you for shopping here!
            </p>
              <div className='checkout'>
              <label>Name: <br/><input style={{width:270}}></input></label><br/><br/>
              <label>Email: <br/><input style={{width:270}}></input></label><br/><br/>
              <label>Message:<br/><textarea cols={35} rows={5}></textarea></label><br/><br/>
              <button onClick={HandleClick2}>Check out</button>
          </div>
        </div>
    </div>
    </div>
  );
  }
