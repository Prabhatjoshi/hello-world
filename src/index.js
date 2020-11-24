import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//capatalize the first word of function to let react know it is a component
function BookList() {
  return (
  <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
  }

//Not a good way of rendering because of readability and back to back function calls to React.createElement for children.
// const Name = () => {
//   return React.createElement('h1',{},'Hello World!')
// }

const Book = () => {
  return (
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/41X8Oe3zTsL._AC_SX184_.jpg" alt="table_photo"/>
const Author = () => <h4>Me</h4>
const Title = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:"20px"}}>how to study</h4>
//now use ReactDom to render the component 
ReactDom.render(<BookList />, document.getElementById('root'));
