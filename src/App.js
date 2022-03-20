import { useState } from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Meals/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      {openCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
