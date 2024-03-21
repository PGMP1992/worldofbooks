import React from 'react'
import './bookcard.css'
import Img1 from '../images/100gomistakesandhowtoavoidthem.png';
import Img2 from '../images/huckleberryfin.jfif';
import Img3 from '../images/huckleberryfin.jfif';
import Img4 from '../images/thecleancoder.png';
import Img5 from '../images/learningvue.png';
import Img6 from '../images/imnotsleepy.png';
import Img7 from '../images/japantravelguide.png';
import Img8 from '../images/nepaltravelguide.png';
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
import {Link} from 'react-router-dom';

export default function bookcard(book) {
    const {id,title,author,type,price,src,category} =book;
const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
    Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21]
let imgsrc=imgarray[id-1];
  return (
    
        <div classname='card'>
            <input type="hidden" id={id} />
            <Link to=
                {"/showbook"}
                 state={book}>
                    <img
                        src={imgsrc}
                        alt="book"
                        className='imgstyle'
                    />
            </Link>
            <div className='info'>
            Title: {title}<br/>
            Author: {author}<br/>
            Category: {category}<br/>
            Type: {type}<br/>
            Price: ${price}<br/>
            <Link to=
                {"/showbook"}
                 state={book}>
                <button>Show book</button>
            </Link>
            </div>
        </div>
  )
}
