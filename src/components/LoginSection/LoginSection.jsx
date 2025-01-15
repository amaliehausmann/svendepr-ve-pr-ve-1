import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { FiAtSign } from "react-icons/fi";
import { BiSolidLock } from "react-icons/bi";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorLoginMessage, setErrorLoginMessage] = useState();
  const [successLoginMessage, setSuccessLoginMessage] = useState();
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const {setUserData} = useContext(UserContext);

  function handleEmailChange(value) {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(value));
  }

  function handlePasswordChange(value) {
    setPassword(value);

    const passwordRegex = /^.{8,}$/;
    setValidPassword(passwordRegex.test(value));
  }

  function SubmitData() {
    const body = new URLSearchParams();
    body.append("username", email);
    body.append("password", password);

    async function fetchData() {
      setIsLoading(true);

      const options = {
        method: "POST",
        body: body,
      };

      try {
        const data = await fetch("https://api.mediehuset.net/token", options);
        const res = await data.json();
        {
          if (res.access_token) {
            setIsLoggedIn(true);
            setUserData(res);
            setSuccessLoginMessage(
              `Du er nu logget ind, velkommen tilbage ${res.user.firstname}`
            );
            toast.success("Du er nu logget ind!");
          } else {
            setErrorLoginMessage("Forkert email eller adgangskode");
            toast.warn("Forkert email eller adgangskode");
          }
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }

  return (
    <SectionWrapper customStyling="loginSection">
      <h1>LOGIN</h1>
      {isLoggedIn ? (
        <h2>{successLoginMessage}</h2>
      ) : (
        <>
          <h3>Indtast login oplysninger:</h3>
          <span>
            <div>
              <FiAtSign />
            </div>
            <InputField
              type="email"
              name="email"
              placeholder="Indtast din email"
              labelText=""
              id="email"
              custom="login"
              invalid={!validEmail && email ? "invalid" : ""}
              action={handleEmailChange}
            />
          </span>
          <span>
            <div>
              <BiSolidLock />
            </div>
            <InputField
              type="password"
              name="password"
              placeholder="Indtast adgangskode"
              labelText=""
              id="password"
              custom="login"
              invalid={!validPassword && password ? "invalid" : ""}
              action={handlePasswordChange}
            />
          </span>
          <p>{errorLoginMessage}</p>
          <Button
            color="blue"
            size="medium"
            title="LOGIN"
            custom="login"
            action={() => SubmitData()}
            disabled={!(validEmail && validPassword)}
          ></Button>
        </>
      )}
    </SectionWrapper>
  );
};
