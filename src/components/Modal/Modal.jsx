import { IoClose } from "react-icons/io5";
import { Button } from "../Button/Button";
import style from './Modal.module.scss'

export const Modal = ({action, title, text}) => {
  return (
    <section className={style.modalStyling}>
      <div>
        <Button action={action}><IoClose/></Button>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};
