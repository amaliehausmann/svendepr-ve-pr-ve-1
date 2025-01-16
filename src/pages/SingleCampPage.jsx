import { NavLink, useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { Button } from "../components/Button/Button";
import { IoChevronBack } from "react-icons/io5";

export const SingleCampPage = () => {
  const { id } = useParams();

  const { data } = useGet(`https://api.mediehuset.net/mediesuset/camps/${id}`);

  return (
    <>
      <Hero
        backgroundUrl="../src/assets/images/hero2.webp"
        position="center 20%"
      />
      <SectionWrapper customStyling='singleCamp'>
        <Button>
          <NavLink to="/camps"> <IoChevronBack/> Tilbage til camps</NavLink>
        </Button>
        <h1>{data?.item?.name}</h1>
        <img src={data?.item?.image} alt="" />
        <h3>Om campen:</h3>
        <p>{data?.item?.description}</p>
        <h3>Antal pladser:</h3>
        <ul>
            <li>{data?.item?.num_people}</li>
        </ul>
        <h3>Billetter der giver adgang:</h3>
        <ul>
          {data?.item?.tickets.map((item) => (
            <li key={item.id}>- {item.name}</li>
          ))}
        </ul>
        <h3>Faciliteter:</h3>
        <ul>
          {data?.item?.facilities.map((item) => (
            <li key={item.id}>- {item.title}</li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
};
