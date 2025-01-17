import { NavLink } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Hero } from "../components/Hero/Hero";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { useGet } from "../hooks/useGet";

export const Tickets = () => {
  const { data } = useGet("https://api.mediehuset.net/mediesuset/tickets");

  const partoutTickets = data?.items.filter((item) => item.type === "partout");
  const oneDayTicket = data?.items.filter((item) => item.type === "single");

  return (
    <>
      <Hero
        backgroundUrl="../src/assets/images/hero3.webp"
        position="center 80%"
      />
      <SectionWrapper customStyling='ticketSection'>
        <h1>BILLETTER</h1>
        <SectionWrapper>
            <h1>PARTOUTBILLETTER - ALLE DAGE</h1>
          {partoutTickets?.map((item) => (
            <div>
              <p>{item.name}</p>
              <span>
              <p>{item.price} DKK</p>
              <Button>
                <NavLink to={`/tickets/${item.id}`}>KØB BILLET</NavLink>
              </Button>
              </span>
            </div>
          ))}
        </SectionWrapper>
        <SectionWrapper>
            <h1>ENKELTBILLETTER</h1>
          {oneDayTicket?.map((item) => (
            <div>
              <p>{item.name.replace('Enkeltbillet', 'billet -', )}</p>
              <span>
              <p>{item.price} DKK</p>
              <Button>
                <NavLink to={`/tickets/${item.id}`} >KØB BILLET</NavLink>
              </Button>
              </span>
            </div>
          ))}
        </SectionWrapper>
      </SectionWrapper>
    </>
  );
};
