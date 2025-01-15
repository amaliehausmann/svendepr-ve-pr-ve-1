import { useState } from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { CiMail } from "react-icons/ci";
import style from "./NewsLetterSection.module.scss";

export const NewsLetterSection = ({ action }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleEmailChange(value) {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  }

  return (
    <section className={style.newsLetterSection}>
      <h1>TILMELD NYHEDSBREV</h1>
      <h2>Få de seneste nyheder sendt til din indbakke</h2>
      <span>
        <div>
          <CiMail />
        </div>
        <InputField
          type="email"
          placeholder="Indtast emailadresse"
          name="email"
          id="email"
          labelText=""
          invalid={!isValid && email ? 'invalid' : ''}
          action={handleEmailChange}
        />
        <Button
          title="TILMELD"
          color="blue"
          custom='newsletter'
          disabled={!isValid}
          action={action}
          size='medium'
        ></Button>
      </span>
      <img src="../src/assets/images/hancock.png" alt="" />
    </section>
  );
};
