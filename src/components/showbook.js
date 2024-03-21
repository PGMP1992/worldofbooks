
import Menu from './menu.js'
import './showbook.css';
import { Link, useLocation } from "react-router-dom";
import React,{useEffect, useState ,useRef ,useLayoutEffect} from 'react';
import Img1 from '../images/100gomistakesandhowtoavoidthem.png';
import Img2 from '../images/huckleberryfin.jfif';
import Img3 from '../images/huckleberryfin.jfif';
import Img4 from '../images/thecleancoder.png';
import Img5 from '../images/learningvue.png';
import Img6 from '../images/imnotsleepy.png';
import Img7 from '../images/japantravelguide.png';
import Img8 from '../images/grymms.jfif';
import Img9 from '../images/pocketmadeira.png';
import Img10 from '../images/whatmakesagarden.png';
import Img11 from '../images/100herbstogrow.png'
import Img12 from '../images/beautyandthebeast.jfif';
import Img13 from '../images/grymms.jfif';
import Img14 from '../images/olivertwist.jfif';
import Img15 from '../images/alice.jfif';
import Img16 from '../images/pinocchio.jfif';
import Img17 from '../images/beautyandthebeast.jfif';
import Img18 from '../images/grymms.jfif';
import Img19 from '../images/olivertwist.jfif';
import Img20 from '../images/alice.jfif';
import Img21 from '../images/pinocchio.jfif';

export default function Showbook() {
  const [Counter,setCounter]=useState(1)
  const [isButtonDisabled,setButtonDisabled]=useState(true);
  const [Cart,setCart]=useState([{cartid:0}])
  /*For controlling att LayoutEffect only will run once */
  const firstUpdate=useRef(true);
  /*For getting data from link */
  const location=useLocation();
  console.log(location)
  const book =location.state;

const {id,title,author,type,price,src,category} =book;
const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
    Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21]
let imgsrc=imgarray[id-1];
useLayoutEffect(()=>
  { /*UseRef*/
    if(firstUpdate.current)
    { 
      /*puts the content in a copy of Cart*/
      let copyCart=JSON.parse(sessionStorage.getItem("Cart"))
      /*If there are products in the storage they will be put in Cart else will cartid=0 */
        if(copyCart)
        {
          setCart(copyCart);
        }
        else
        {
          copyCart=({cartid:0,cartName:"empty"})
          setCart(copyCart)
        }
      firstUpdate.current=false;
      return;
    }
  })
  /*When user has clicked 'Add to cart' */ 
  function handleClick()
  {
    
   
    /*If the Cart is empty*/
    if(Cart.cartid===0)
    {setCart([{cartid:1,title:title,author:author,price:price,number:Counter,sum:(price*Counter)}]);}
    else
    {
      /*Puts the current item last in Cart */
      let nextid=Cart.length+1;
      setCart([...Cart,{cartid:nextid,title:title,author:author,price:price,number:Counter,sum:(price*Counter)}]);
    }
    

    }
    useEffect(()=>
  {
  
    sessionStorage.setItem("Cart",JSON.stringify(Cart));
    console.log(Cart)
    if(Cart.cartid===0)
    setButtonDisabled(true);
    else
    setButtonDisabled(false)
  },[Cart]);
 
  return (
    <div>
        <Menu />
        <div className='showbook'>
            <img src={imgsrc} alt={title} className='showimg'>
            </img><br/>
            <div className='showinfo'>
                <h4>{title}<br/></h4>
                By: {author}<br/><br/>
                Category: {category}<br/><br/>
                {type}<br/>
                <p>description <br/></p>
                ${price}<br/><br/>
                <button onClick={()=>Counter===1?setCounter(1):setCounter(Counter-1)}>-</button>
          <input style={{width:15}} readOnly value={Counter} ></input>
          <button onClick={()=>setCounter(Counter+1)}>+</button><br/><br/>
                <button onClick={handleClick}> Add to cart</button><br/><br/>
          <Link to="/showcart" >
            <button disabled={isButtonDisabled}>ShowCart</button>
          </Link>
            </div>
        </div>
    </div>
  )
}
