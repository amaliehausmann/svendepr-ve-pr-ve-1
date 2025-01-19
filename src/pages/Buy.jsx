import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { Button } from "../components/Button/Button";
import { useContext, useState } from "react";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { InputField } from "../components/InputField/InputField";
import { IoIosAt } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCity } from "react-icons/fa6";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";

export const Buy = () => {
  const { id } = useParams();
  const [ticketAmount, setTicketAmount] = useState(1);
  const [showSubtract, setShowSubtract] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [zipcode, setZipcode] = useState();
  const [city, setCity] = useState();
  const [isValid, setIsValid] = useState();
  const [camp, setCamp] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [postMethod, setPostMethod] = useState();
  const [error, setError] = useState();
  const [ticketsBought, setTicketsBought] = useState(false);

  //Context
  const { userData } = useContext(UserContext);

  //   Ticket handling
  function addTicket() {
    setTicketAmount((prev) => prev + 1);
    if (ticketAmount === 1) {
      setShowSubtract(true);
    }
  }

  function removeTicket() {
    if (ticketAmount > 2) {
      setTicketAmount((prev) => prev - 1);
    } else if (ticketAmount === 2) {
      setTicketAmount(1);
      setShowSubtract(false);
    }
  }

  //Data Fetch
  const { data } = useGet(
    `https://api.mediehuset.net/mediesuset/tickets/${id}`
  );

  //POST
  function submitData(token) {
    if (!token) {
      toast.warn("Du skal være logget ind for at købe billetter");
      return;
    }

    if (
      !email ||
      !password ||
      !name ||
      !address ||
      !zipcode ||
      !city ||
      !camp ||
      !ticketAmount ||
      !postMethod
    ) {
      toast.warn("Alle felter skal udfyldes");
      return;
    }

    const body = new URLSearchParams();
    body.append("email", email);
    body.append("password", password);
    body.append("name", name);
    body.append("address", address);
    body.append("zipcode", zipcode);
    body.append("city", city);
    body.append("ticket_id", data?.item.id);
    body.append("camp_id", camp);
    body.append("quantity", ticketAmount);
    body.append("type", postMethod);

    async function fetchData() {
      const options = {
        method: "POST",
        body: body,
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await fetch(
          "https://api.mediehuset.net/mediesuset/usertickets",
          options
        );
        const res = await response.json();
        if (res.status == "Ok") {
          toast.success("Billetterne er blevet købt!");
          setTicketsBought(true);
        }
      } catch (err) {
        setError(err);
        toast.error("Der opstod en fejl ved at sende data");
      }
    }
    fetchData();
  }

  //   Handles for inputs
  function handleSelect(e) {
    setCamp(e.target.value);

    if (e.target.value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function handleEmailChange(value) {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  }

  function handlePasswordChange(value) {
    setPassword(value);

    const passwordRegex = /^.{8,}$/;
    setIsValid(passwordRegex.test(value));
  }

  function handleRepeatPassword(value) {
    setRepeatPassword(value);

    if (value === password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function handleNameChange(value) {
    setName(value);

    if (value.length < 2) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function handleAddressChange(value) {
    setAddress(value);

    const addressRegex = /^[a-zA-ZæøåÆØÅ0-9\s,.#-]{5,100}$/;
    setIsValid(addressRegex.test(value));
  }

  function handleZipcodeChange(value) {
    const zipcodeInt = parseInt(value, 10);
    setZipcode(zipcodeInt);

    const zipcodeRegex = /^\d{4}$/;
    setIsValid(zipcodeRegex.test(value));
  }

  function handleCityChange(value) {
    setCity(value);

    if (value.length < 4) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const handleRadioChange = (e) => {
    setPostMethod(e.target.value);
  };

  //POST
  return (
    <>
      <Hero
        backgroundUrl="../src/assets/images/hero3.webp"
        position="center 80%"
      />
      {ticketsBought ? (
        <SectionWrapper customStyling="TicketSuccess">
          <h1>TAK FOR DIT KØB</h1>
          <p>
            Vi har modtaget din bestilling og du vil modtage en ordrebekræftelse
            snarest
          </p>
        </SectionWrapper>
      ) : (
        <SectionWrapper customStyling="buyTickets">
          <h1>BILLETTER</h1>
          <h2>INFORMATION OM DEN VALGTE BILLET</h2>
          {data?.item.type === "partout" ? (
            <h3>{data?.item.name} - 4 dage</h3>
          ) : (
            <h3>{data?.item.name.replace("Enkeltbillet", "Billet -")}</h3>
          )}
          {data?.item.description
            .replace(/^.*?\n\n/, "")
            .split("\n\n")
            .map((part, index) => (
              <p key={index}>{part}</p>
            ))}

          <h2>BESTILLING</h2>
          <div>
            <p>Antal:</p>
            <p>
              {showSubtract && <Button action={removeTicket} title="-" />}
              {ticketAmount}
              <Button action={addTicket} title="+" />
            </p>
            {data?.item.type === "partout" ? (
              <p>Stk. {data?.item.name} - 4 dage</p>
            ) : (
              <p>Stk. {data?.item.name.replace("Enkeltbillet", "Billet -")}</p>
            )}
            <p>DKK {data?.item.price}</p>
            <p>DKK {data?.item.price * ticketAmount}.00</p>
          </div>
          <div>
            <p>Pris i alt:</p>
            <p>DKK {data?.item.price * ticketAmount}.00</p>
          </div>
          <GridContainer columns={2}>
            <SectionWrapper>
              <label htmlFor="camp">Vælg camp:</label>
              <select
                name="camp"
                id="camp"
                onChange={handleSelect}
                value={camp}
                style={{
                  border: camp === "" ? "solid 1px red" : "none",
                }}
              >
                <option value="">----</option>
                {data?.item.camps.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              <span>
                <div>
                  <IoIosAt />
                </div>
                <InputField
                  id="email"
                  labelText="Email:"
                  name="email"
                  type="email"
                  placeholder="Indtast din email"
                  invalid={!isValid && email ? "invalid" : ""}
                  action={handleEmailChange}
                />
              </span>
              <span>
                <div>
                  <IoMdLock />
                </div>
                <InputField
                  id="password"
                  labelText="Adgangskode:"
                  name="password"
                  type="password"
                  placeholder="Indtast adgangskode"
                  invalid={!isValid && password ? "invalid" : ""}
                  action={handlePasswordChange}
                />
              </span>
              <span>
                <div>
                  <IoMdLock />
                </div>
                <InputField
                  id="password"
                  labelText="Gentag adgangskode:"
                  name="password"
                  type="password"
                  placeholder="Gentag adgangskode"
                  invalid={!isValid && repeatPassword ? "invalid" : ""}
                  action={handleRepeatPassword}
                />
              </span>
              <span>
                <div>
                  <FaUser />
                </div>
                <InputField
                  id="name"
                  labelText="Navn:"
                  name="name"
                  type="text"
                  placeholder="Indtast dit navn"
                  invalid={!isValid && name ? "invalid" : ""}
                  action={handleNameChange}
                />
              </span>
              <span>
                <div>
                  <FaRoad />
                </div>
                <InputField
                  id="address"
                  labelText="Adresse:"
                  name="address"
                  type="text"
                  placeholder="Indtast din adresse"
                  invalid={!isValid && address ? "invalid" : ""}
                  action={handleAddressChange}
                />
              </span>
              <span>
                <div>
                  <IoLocationSharp />
                </div>
                <InputField
                  id="zipcode"
                  labelText="Postnummer:"
                  name="zipcode"
                  type="text"
                  placeholder="Indtast dit postnummer"
                  invalid={!isValid && zipcode ? "invalid" : ""}
                  action={handleZipcodeChange}
                />
              </span>
              <span>
                <div>
                  <FaCity />
                </div>
                <InputField
                  id="city"
                  labelText="By:"
                  name="city"
                  type="text"
                  placeholder="Indtast dit bynavn"
                  invalid={!isValid && city ? "invalid" : ""}
                  action={handleCityChange}
                />
              </span>
            </SectionWrapper>
            <SectionWrapper>
            <h3>Vælg forsendelsesmetode:</h3>
              <div>
                <label htmlFor="">
                  <input
                    type="radio"
                    id="paper"
                    name="postmethod"
                    value="paper"
                    checked={postMethod === "paper"}
                    onChange={handleRadioChange}
                  />
                  Jeg ønsker billetterne tilsendt
                </label>
                <label htmlFor="">
                  <input
                    type="radio"
                    id="print"
                    name="postmethod"
                    value="print"
                    checked={postMethod === "print"}
                    onChange={handleRadioChange}
                  />
                  Jeg udskriver billetterne selv
                </label>
              </div>
              <Button
                title="SEND"
                action={() => submitData(userData?.access_token)}
                color="blue"
              />
            </SectionWrapper>
          </GridContainer>
        </SectionWrapper>
      )}
    </>
  );
};
