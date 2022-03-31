import CartButton from "./CartButton";

import classes from "./Header.module.css";
import soupBannerImage from "../../assets/soup-banner.jpg";
import logo from "../../assets/logo.png";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <CartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={soupBannerImage} alt="" />
      </div>
    </>
  );
}
