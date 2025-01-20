import { Hero } from "../components/Hero/Hero";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { PageTitle } from "../components/PageTitle/PageTitle";

export const Frontpage = () => {
  return (
    <>
      <PageTitle pageTitle="MedieSuset" />
      <Hero backgroundUrl="../src/assets/images/hero1.webp" position="bottom" />
      <NewsSection />
    </>
  );
};
