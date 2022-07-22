import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from "../redux/actions/index"
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProductsPage(props) {
  return (
    <div className='page'>
        <Header/>
        <h2>Products List</h2>
        {props.bookList.length > 0 ? props.bookList.map(book=>(
        <div key={book.id} className='book'>
        <img src={book.image} alt={book.name} title={book.name} />
        <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: $ {book.price}</p>
            <button onClick={()=>props.addToCart(book)}>Add To Cart</button>
        </div>
    </div>
    )):<p style={{textAlign: "center",backgroundColor:"#00b1d5",color:"#fff",padding:"5px"}} >There are no items in the list</p>
}
        <Footer/>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
      bookList: state.bookList,
      cart: state.cart
    }
  }

const mapActionsToProps = ({addToCart})
export default connect(mapStateToProps, mapActionsToProps)(ProductsPage)