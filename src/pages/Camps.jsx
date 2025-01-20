import { NavLink } from "react-router-dom"
import { Button } from "../components/Button/Button"
import { Card } from "../components/Card/Card"
import { Hero } from "../components/Hero/Hero"
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper"
import { useGet } from "../hooks/useGet"
import { IoIosArrowForward } from "react-icons/io";

export const Camps = () => {

    const {data} = useGet(
        'https://api.mediehuset.net/mediesuset/camps'
    )

  return (
    <>
    <Hero backgroundUrl='../src/assets/images/hero2.webp' position='center 20%'/>
    <SectionWrapper>
        <h1>CAMPS</h1>
        {data?.items.map((item) => (
            <Card key={item.id} custom='campCard' image={item.image} title={item.name} description={item.description}>
                <h3>Antal pladser:</h3>
                <p>{item.num_people}</p>
                <h3>Billetter der giver adgang:</h3>
                <span>
                    <ul>
                        {item.tickets?.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </span>
                <Button custom='campCard'><NavLink to={`/camps/${item.id}`}>LÆS MERE <IoIosArrowForward /></NavLink></Button>
            </Card>
        ))}
    </SectionWrapper>
    </>
  )
}