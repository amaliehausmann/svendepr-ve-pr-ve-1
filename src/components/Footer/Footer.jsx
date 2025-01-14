import { NewsLetterSection } from "../NewsLetterSection/NewsLetterSection";
import style from "./Footer.module.scss";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

export const Footer = ({ action }) => {
  return (
    <footer className={style.footerStyling}>
      <div className={style.Container}>
        <div className={style.image}></div>
      </div>
      <NewsLetterSection action={action} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </footer>
  );
};
