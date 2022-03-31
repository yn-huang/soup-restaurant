import { useState } from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Meals/Menu";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
  };

  return (
    <Provider store={store}>
      {openCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Menu />
      </main>
    </Provider>
  );
}

export default App;
