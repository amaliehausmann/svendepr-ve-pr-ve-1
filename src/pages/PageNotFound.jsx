import { Hero } from "../components/Hero/Hero"
import { PageTitle } from "../components/PageTitle/PageTitle"
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper"

export const PageNotFound = () => {
  return (
    <>
    <PageTitle pageTitle='Page not found'/>
        <Hero backgroundUrl='../src/assets/images/hero3.webp' position='center 80%'/>
        <SectionWrapper>
            <h1>404 - Denne side findes ikke</h1>
            <p>Den side du leder efter findes desværre ikke</p>
        </SectionWrapper>
    </>
  )
}