import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { NavLink } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { PageTitle } from "../components/PageTitle/PageTitle";

export const SingleNewsPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGet(
    `https://api.mediehuset.net/mediesuset/news/${id}`
  );

  function convertToDate(datetimeString) {
    const utcDate = new Date(datetimeString + " UTC"); // Parse as UTC
    const options = {
      timeZone: "Europe/Copenhagen",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("da-DK", options).format(utcDate);
  }

  return (
    <>
      <PageTitle pageTitle="Nyhed" />
      <Hero backgroundUrl="../src/assets/images/hero1.webp" position="bottom" />
      <SectionWrapper customStyling="singleNews">
        <span>
          <h1>Nyheder</h1>
          <NavLink to="/">
            {" "}
            <IoChevronBack />
            Tilbage til forsiden
          </NavLink>
        </span>
        {data && (
          <section>
            <h1>{data.item.title}</h1>
            <p>Forfatter: {data.item.author}</p>
            <p>Skrevet d. {convertToDate(data.item.datetime)}</p>
            <img src={data.item.image} alt="" />
            <p>{data.item.content}</p>
          </section>
        )}
      </SectionWrapper>
    </>
  );
};
