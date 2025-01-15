import { useState } from "react";
import { Card } from "../components/Card/Card";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { useGet } from "../hooks/useGet";
import { Filter } from "../components/Filter/Filter";
import { Hero } from "../components/Hero/Hero";

export const Lineup = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );

  // Funktion til at formatere datoen til dansk format med "kl." mellem ugedag og tid
  function FormatDate(datestring) {
    const date = new Date(datestring);

    const options = {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };

    // Formaterer datoen til dansk format
    const formattedDate = new Intl.DateTimeFormat("da-DK", options).format(
      date
    );

    // Splitter den formaterede dato i ugedag og tid
    const [weekday, time] = formattedDate.split(" ");

    // Gør første bogstav af ugedagen stort og tilføjer "kl." før tiden
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} kl. ${time}`;
  }

  // Sorterer data i alfabetisk rækkefølge baseret på titel
  const sortedData = data?.items?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Funktion til at håndtere filtrering af data
  function handleDataFilter(filter) {
    setSelectedFilter(filter);
  }

  // Filtrerer data baseret på det valgte filter. Hvis der er et filter, vises kun elementer med den scene. Hvis intet filter er valgt, vises data i alfabetisk rækkefølge.
  const filteredData = selectedFilter
    ? data?.items?.filter((item) => item.stage_name === selectedFilter)
    : data?.items;

  return (
    <>
    <Hero backgroundUrl='../src/assets/images/hero1.webp' position='bottom'/>
      <SectionWrapper customStyling="lineup">
        <h1>LINE UP</h1>
        <Filter selectedFilter={selectedFilter} handleDataFilter={handleDataFilter}/>
        <GridContainer columns={3} gap="one">
          {filteredData?.map((item) => {
            // Bestemmer hvilken class der skal anvendes til hver scene
            let stageClass = "purple";
            if (item.stage_name === "Rød scene") {
              stageClass = "red";
            } else if (item.stage_name === "Blå scene") {
              stageClass = "blue";
            } else if (item.stage_name === "Grøn scene") {
              stageClass = "green";
            }

            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={FormatDate(item.datetime)}
                custom={stageClass}
              />
            );
          })}
        </GridContainer>
      </SectionWrapper>
    </>
  );
};
