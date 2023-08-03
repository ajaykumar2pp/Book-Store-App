
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import BookDetailPage from "./pages/BookDetailPage"
import BookListingPage from "./pages/BookListingPage"
import CheckoutPage from "./pages/CheckoutPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import PageNotFound from "./pages/PageNotFound"

import OrderBook from './pages/OrderBook';
import './App.css'


function App() {


  return (
    <>
        <BrowserRouter>
        <Navbar />
         
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shippingCart' element={<ShoppingCartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/booklisting' element={<BookListingPage />} />
          <Route path='/book/:id' element={<BookDetailPage />} />
          <Route path='/orders' component={<OrderBook/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
    
      </BrowserRouter>

    </>
  )
}

export default App
