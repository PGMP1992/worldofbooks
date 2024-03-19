import React from 'react';
import './searchbooks.css';
import Bookcard from './bookcard.js';
import Books from './books.json';
import Menu from './menu.js'

export default function searchbooks() {
  const allBooks=(values)=>{
    return(
      <div className='book' key={values.id}>
      <Bookcard
      id={values.id}
      title={values.title}
      autor={values.autor}
      type={values.type}
      price={values.price}
      src={values.src}
      />

    </div>
    );
}
  return (
    
   <div>
      <Menu />
      <div>
        <h1>Search books</h1>
          <div className='bookdisplay'>
          {Books.map(allBooks)}
          </div>
      </div>
    </div>
  );
  }
