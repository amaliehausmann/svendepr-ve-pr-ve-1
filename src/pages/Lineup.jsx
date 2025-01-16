import { useContext, useState } from "react";
import { Card } from "../components/Card/Card";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { useGet } from "../hooks/useGet";
import { Filter } from "../components/Filter/Filter";
import { Hero } from "../components/Hero/Hero";
import { Modal } from "../components/Modal/Modal";
import { UserContext } from "../context/userContext";
import { Button } from "../components/Button/Button";
import { toast } from "react-toastify";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillSpotify } from "react-icons/ai";

export const Lineup = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  // Henter alle event-data fra API'et
  const { data: eventData } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );

  // Henter data for en specifik artist, når den er valgt
  const { data: singleEventData } = useGet(
    selectedArtist
      ? `https://api.mediehuset.net/mediesuset/events/${selectedArtist}`
      : null
  );

  //POST request
  const { userData } = useContext(UserContext);

  function addEvent(token) {
    const body = new URLSearchParams();
    body.append("user_id", userData.user_id);
    body.append("event_id", selectedArtist);

    async function fetchData() {
      setIsLoading(true);

      const options = {
        method: "POST",
        body: body,
        redirect: "follow",
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const data = await fetch(
          "https://api.mediehuset.net/mediesuset/programme",
          options
        );
        const res = await data.json();
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    toast.success("Tilføjet til dit program!");
  }

  // Funktion til at åbne modal, når en artist bliver klikket
  function handleArtistClick(value) {
    setSelectedArtist(value);
    setModalIsOpen(true);
  }

  // Funktion til at lukke modal
  function closeModal() {
    setModalIsOpen(false);
    setSelectedArtist(null);
  }

  // Funktion til at bestemme stage class ud fra stage navn
  function getStageClass(stageName) {
    switch (stageName) {
      case "Rød scene":
        return "red";
      case "Blå scene":
        return "blue";
      case "Grøn scene":
        return "green";
      default:
        return "purple";
    }
  }

  // Funktion til at formatere datoen til dansk format
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

  // Funktion til at formatere kun tiden
  function FormatTime(datestring) {
    const date = new Date(datestring);

    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedTime = new Intl.DateTimeFormat("da-DK", options).format(
      date
    );

    return formattedTime;
  }

  // Sorterer eventdata alfabetisk efter titel
  const sortedData = eventData?.items?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Funktion til at håndtere filtrering af data
  function handleDataFilter(filter) {
    setSelectedFilter(filter);
  }

  // Filtrerer data baseret på valgt filter. Hvis der er et filter, vises kun elementer med den valgte scene
  const filteredData = selectedFilter
    ? eventData?.items?.filter((item) => item.stage_name === selectedFilter)
    : eventData?.items;

  return (
    <>
      <Hero backgroundUrl="../src/assets/images/hero1.webp" position="bottom" />
      <SectionWrapper customStyling="lineup">
        <h1>LINE UP</h1>
        <Filter
          selectedFilter={selectedFilter}
          handleDataFilter={handleDataFilter}
        />
        <GridContainer columns={3} gap="one">
          {filteredData?.map((item) => {
            // Bestemmer hvilken class der skal anvendes til hver scene
            let stageClass = getStageClass(item.stage_name);

            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={FormatDate(item.datetime)}
                custom={stageClass}
                action={() => handleArtistClick(item.id)}
              />
            );
          })}
        </GridContainer>

        {modalIsOpen && singleEventData?.item && (
          <Modal
            custom={getStageClass(singleEventData?.item?.stage_name)}
            action={closeModal}
            title={singleEventData?.item?.stage_name}
            text={"Kl." + " " + FormatTime(singleEventData?.item?.datetime)}
          >
            <GridContainer columns={2}>
              <section>
                <img src={singleEventData?.item?.image} alt="" />
                {userData && (
                  <Button
                    color={getStageClass(singleEventData?.item?.stage_name)}
                    custom='singleArtist'
                    title="Tilføj til mit program"
                    action={() => addEvent(userData.access_token)}
                  ></Button>
                )}
                <span>
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillSpotify />
                </span>
              </section>
              <section>
                <h1>{singleEventData?.item?.title}</h1>
                <p>{singleEventData?.item?.description}</p>
              </section>
            </GridContainer>
          </Modal>
        )}
      </SectionWrapper>
    </>
  );
};
