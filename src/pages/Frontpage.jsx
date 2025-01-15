import { Hero } from "../components/Hero/Hero"
import { NewsSection } from "../components/NewsSection/NewsSection"

export const Frontpage = () => {

  return (
    <>
    <Hero backgroundUrl='../src/assets/images/hero1.webp' position='bottom'/>
    <NewsSection/>
    </>
  )
}