import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useGet } from "../hooks/useGet";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";
import { Button } from "../components/Button/Button";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { Hero } from "../components/Hero/Hero";

export const MyProgram = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [programData, setProgramData] = useState([]);
  const [event, setEvent] = useState(null);

  const { userData } = useContext(UserContext);
  const { data } = useGet(
    `https://api.mediehuset.net/mediesuset/programme/${userData.user_id}`,
    userData?.access_token
  );

  // Function til at fjerne duplicates
  // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects/59528833#59528833
  function getUnique(arr, comp) {
    return arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
  }

// Opdaterer programData hver gang data opdateres
  useEffect(() => {
    if (data?.items) {
      const uniqueData = getUnique(data.items, "event_id");
      setProgramData(uniqueData);
    }
  }, [data]);

  // Function der sletter et event fra api'et
  function deleteEvent(token, value) {
    setEvent(value);

    async function fetchData() {
      setIsLoading(true);

      const options = {
        method: "DELETE",
        redirect: "follow",
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await fetch(
          `https://api.mediehuset.net/mediesuset/programme/${value}`,
          options
        );
        if (response.ok) {
          // Opdaterer programData ved at fjerne det event der er blevet slettet fra API'et
          setProgramData((prev) => prev.filter((item) => item.id !== value));
          toast.info("Event fjernet fra dit program");
        } else {
          setError("Kunne ikke slette eventet.");
          toast.warn(error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }

  // Funktion til at bestemme stageClass ud fra stagename
  function getStageClass(stageName) {
    switch (stageName) {
      case "Rød scene":
        return "#e9485b";
      case "Blå scene":
        return "#4a6fbf";
      case "Grøn scene":
        return "#54a047";
      default:
        return "#a12e8f";
    }
  }

  return (
    <>
    <Hero backgroundUrl='../src/assets/images/hero1.webp' position='bottom'/>
        <SectionWrapper customStyling="myProgram">
      <h1>MIT PROGRAM</h1>
      <SectionWrapper>
        {programData.length > 0 ? (
          programData.map((item) => {
            // Bestemmer class for hver scene
            let stageClass = getStageClass(item.stage_name);
            return (
              <div key={item.event_id}>
                <span style={{ backgroundColor: `${stageClass}` }}>TID</span>
                <h1>{item.event_title}</h1>
                <Button
                  action={() => deleteEvent(userData?.access_token, item.id)}
                >
                  <IoMdClose />
                </Button>
              </div>
            );
          })
        ) : (
          <p>Hov, det ser ud til her er <b>tomt</b>! Tilføj nogle events til dit program på <b>Line-Up</b> siden! </p>
        )}
      </SectionWrapper>
    </SectionWrapper>
    </>
  );
};
