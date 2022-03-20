import ReactDOM from "react-dom";
import Card from "./Card";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalBox = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <ModalBox>{props.children}</ModalBox>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
