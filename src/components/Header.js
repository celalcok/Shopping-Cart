import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
function Header(props) {
  const filtered = Array.from(new Set(props.cart.map(JSON.stringify))).map(JSON.parse);

  return (
    <div className="header">
        <div>
            <span className="header-title" >Making Shopping Cart</span>
            <img height={30} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
            <span className='header-title'>React Tutorials</span>
        </div>
        <nav>
            <Link to="/" >Book List</Link>
            <Link to="/cart" style={{marginRight:"18px"}} className='cart-link'>Cart<span className='cart-count'>{filtered.length}</span></Link>
        </nav>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {
      bookList: state.bookList,
      cart: state.cart
    }
  }

export default connect(mapStateToProps)(Header)