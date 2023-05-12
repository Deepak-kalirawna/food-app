import React, { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <CartProvider value={{ amount: 0, totalAmount: 0 }}>
      {showModal && <Cart onClose={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
