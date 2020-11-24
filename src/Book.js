import React from 'react'

//Not a good way of rendering because of readability and back to back function calls to React.createElement for children.
// const Name = () => {
//   return React.createElement('h1',{},'Hello World!')
// }
const Book = (props) => {
  //destructuring the props
  const {img,title,author} = props;
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className="book" onClick={clickHandler}>
      <img src={img} alt="table_photo"/>
      <h1 onMouseOver={() => {console.log(title)}}>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book

