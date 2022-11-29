import './App.css';
import { useState } from "react";
import bakeryData from "./assets/tea-data.json";
import TeaItem from './components/TeaItem';
import { Col, Row } from 'antd';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [renderList, setRenderList] = useState(bakeryData);
 
  const isInCart = (element, item) => element.name === item.name;

  function addToCart(item) {
    // if this item is not in cart yet
    if (cartItems.every(cartItem => cartItem.name !== item.name )) {
    // add it to cart
      item.quantity = 1
      setCartItems([...cartItems, item])
    } else {
      // increase its quantity
      item.quantity += 1
      setCartItems(cartItems =>
        cartItems.filter(cartItems => cartItems.name !== "not tea")
      );
    }
  }

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity
    }
    return (total).toFixed(2);
  }

  function removeFromCart(item) {
    if (item.quantity != 1) {
      item.quantity -= 1
      setCartItems(cartItems =>
        cartItems.filter(cartItems => cartItems.name !== "not tea")
      );
    } else {
      setCartItems(cartItems =>
        cartItems.filter(cartItems => cartItems.name !== item.name)
      );
    }
  }

  return (
    <div className="App">
      <h1>My Tea Shop</h1>

      <div class="row">
        <div class="column">
          {/* Map tea items from info page to grid */}
          <Row gutter={16}>
            {bakeryData.map((item, index) => (
              <Col offset={4} lg={4}>
                <div>
                  <TeaItem item={item} addToCart={addToCart}></TeaItem>
                  <br></br>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div class="column">
          {/* Render a list of items in the cart */}
          <div class="cart-card">
            <h2>Cart</h2>
            {cartItems.map((item, index) => (
              <div>
              <p>{item.quantity}x {item.name}<br></br>{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
              </div>
            ))}
            <h3>Total:</h3>
            {calculateTotal()}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
