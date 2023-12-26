import Footer from "./Components/Footer";
import Nav from "./Components/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    // const dupeItem = cart.find((item) => +item.id === +book.id);
    // if (dupeItem) {
    //   setCart(
    //     cart.map((item) => {
    //       if (item.id === dupeItem.id) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         };
    //       } else {
    //         return item;
    //       }
    //     })
    //   );
    // } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    
  }

  function changeQuantity(book, quantity){
    setCart(cart.map(item =>
        {
          if (item.id === book.id){
            return {
              ...item, 
              quantity: +quantity,
            }
          }
          else {
            return item
          }
        }
      ))
  }

  
//Gets rid of a specific item from an array
  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id)) 
  }

  function numberOfItems(){
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems ={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity ={changeQuantity} removeItem ={removeItem}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
