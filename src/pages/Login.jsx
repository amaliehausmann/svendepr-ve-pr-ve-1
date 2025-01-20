import { Hero } from "../components/Hero/Hero";
import { LoginSection } from "../components/LoginSection/LoginSection";
import { PageTitle } from "../components/PageTitle/PageTitle";

export const Login = () => {
  return (
    <>
      <PageTitle pageTitle="Login" />
      <Hero
        backgroundUrl="../src/assets/images/hero2.webp"
        position="center 20%"
      />
      <LoginSection />
    </>
  );
};
