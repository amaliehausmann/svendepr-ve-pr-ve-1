import { Hero } from "../components/Hero/Hero"
import { PageTitle } from "../components/PageTitle/PageTitle"
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper"

export const Program = () => {
  return (
    <>
    <PageTitle pageTitle='Program'/>
    <Hero backgroundUrl='../src/assets/images/hero3.webp' position='center 80%'/>
    <SectionWrapper>
        <h1 style={{padding: '8vw'}}>Denne side er under konstruktion...</h1>
    </SectionWrapper>
    </>
  )
}