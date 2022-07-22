import './App.css';
import {connect} from "react-redux"
import {HashRouter, Routes, Route} from "react-router-dom"
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
function App(props) {
  console.log(props.bookList)
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path = "/cart" element={<CartPage />} />
      </Routes>
    </HashRouter>
  );
}

const mapStateToProps = (state)=>{
  return {
    bookList: state.bookList
  }
}

export default connect(mapStateToProps)(App);
