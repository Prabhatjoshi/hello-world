import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//named import
import {books} from './books'

//default import we can name book as anything we like
import Book from './Book.js'

//capatalize the first word of function to let react know it is a component
function BookList() {
  return (
  <section className="booklist">
    {books.map((book) => {
      return(
        <Book key={book.id} {...book}></Book>

      );
    })}
  </section>
  );
  }
//now use ReactDom to render the component 
ReactDom.render(<BookList />, document.getElementById('root'));
