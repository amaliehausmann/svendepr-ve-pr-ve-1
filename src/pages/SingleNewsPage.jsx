import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { NavLink } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export const SingleNewsPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGet(
    `https://api.mediehuset.net/mediesuset/news/${id}`
  );

  return (
    <>
      <Hero backgroundUrl="../src/assets/images/hero1.webp" />
      <SectionWrapper customStyling='singleNews'>
        <span>
        <h1>Nyheder</h1>
        <NavLink to='/'> <IoChevronBack />Tilbage til forsiden</NavLink>
        </span>
        {data && (
          <section>
            <h1>{data.item.title}</h1>
            <p>Forfatter: {data.item.author}</p>
            <img src={data.item.image} alt="" />
            <p>{data.item.content}</p>
          </section>
        )}
      </SectionWrapper>
    </>
  );
};
