import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from "../redux/actions/index"

import Header from '../components/Header'
import Footer from '../components/Footer'

function CartPage(props) {
  const filtered = Array.from(new Set(props.cart.map(JSON.stringify))).map(JSON.parse);
  const total = filtered.reduce((total,item)=>(total += item.price),0);

    
    
    console.log(filtered)
  return (
    <div className='page'>
        <Header/>
        <h2><span style={{}}>Total: $ {total.toFixed(2)}</span></h2>

          {filtered.length>0?filtered.map((book,index)=>(
              
              <div key={index} className='book'>
              <img src={book.image} alt={book.name} title={book.name} />
              <div>
                  <h4>{book.name}</h4>
                  <p>Author: {book.author}</p>
                  <p>Price: $ {book.price}</p>
                  <button onClick={()=>props.removeFromCart(book.id)}>Remove From Cart</button>
              </div>
          </div>
          )):<p style={{textAlign: "center",backgroundColor:"#00b1d5",color:"#fff",padding:"5px"}} >There are no items in the cart</p>
          }
        <Footer/>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
      cart: state.cart
    }
  }
const mapActionsToProps = ({removeFromCart})
export default connect(mapStateToProps,mapActionsToProps)(CartPage)