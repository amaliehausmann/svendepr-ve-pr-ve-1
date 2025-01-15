import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Button";
import style from './Modal.module.scss'


export const Modal = ({action, title, text, custom, children}) => {
  return (
    <section className={`${style.modalStyling} ${style[custom]}`}>
      <div>
        <Button action={action}><IoClose/></Button>
        <span>
        <h1>{title}</h1>
        <p>{text}</p>
        </span>
        {children}
      </div>
    </section>
  );
};
