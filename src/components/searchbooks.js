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
      author={values.author}
      type={values.type}
      category={values.category}
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
        <h2 style={{margin:10}}>Search books</h2>
          <div className='bookdisplay'>
          {Books.map(allBooks)}
          </div>
      </div>
    </div>
  );
  }
