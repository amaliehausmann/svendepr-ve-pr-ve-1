import { GridContainer } from "../components/GridContainer/GridContainer";
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper";

export const PracticalInfo = () => {
  return (
    <>
      <SectionWrapper customStyling="practicalinfo">
        <h1>PRAKTISK INFO</h1>
        <SectionWrapper customStyling="mapSection">
          <GridContainer columns={2}>
            <img
              src="../src/assets/images/map.jpg"
              alt="Kort over festivalpladsen"
            />
            <article>
              <h2>Kort over pladsen</h2>
              <p>
                På kortet til venstre kan du få et overblik over hele
                festivalpladsen. Her finder du de vigtigste områder, så du nemt
                kan finde rundt og få det bedste ud af MedieSuset.
              </p>
              <ul>
                <li>
                  <b>Scener:</b> Find hurtigt frem til Rød Scene, Blå Scene, og
                  Grøn Scene, hvor alle de store koncerter finder sted.
                </li>
                <li>
                  <b>Mad og Drikke:</b> Se placeringen af vores madboder og
                  barer, så du altid kan holde energien oppe.
                </li>
                <li>
                  <b>Toiletter:</b> Markeringen på kortet gør det nemt at finde
                  de nærmeste toiletter.
                </li>
                <li>
                  <b>Ind- og udgang:</b> Få overblik over, hvor du kommer ind og
                  ud af festivalområdet.
                </li>
                <li>
                  <b>Merchandise:</b> Husk at besøge merchandiseboden for at
                  tage et stykke af festivalen med hjem!
                </li>
              </ul>
              <p>
                Vi anbefaler, at du gemmer en version af kortet på din telefon,
                så du altid har det ved hånden.
              </p>
            </article>
          </GridContainer>
        </SectionWrapper>
        <SectionWrapper customStyling="directions">
          <GridContainer columns={2}>
            <article>
              <h2>Sådan Finder Du MedieSuset</h2>
              <p>
                Det er nemt at komme til MedieSuset, uanset om du kommer med
                offentlig transport, bil, cykel eller til fods. Her er en
                oversigt, der hjælper dig godt på vej:
              </p>

              <h3>Offentlig Transport</h3>
              <ul>
                <li>
                  <b>Bus:</b> Flere busruter stopper tæt på festivalområdet.
                  Tjek rejseplanen på{" "}
                  <a href="https://www.rejseplanen.dk" target="_blank">
                    Rejseplanen.dk
                  </a>{" "}
                  for den bedste rute.
                </li>
              </ul>

              <h3>I Bil</h3>
              <ul>
                <li>
                  <b>Adresse:</b> Indtast følgende adresse i din GPS:{" "}
                  <em>Øster Uttrup Vej 1, 9000 Aalborg</em>.
                </li>
                <li>
                  <b>Parkering:</b> Der er gratis parkeringsområder tæt på
                  festivalpladsen. Følg skiltningen for at finde den nærmeste
                  ledige plads.
                </li>
              </ul>

              <h3>På Cykel</h3>
              <p>
                Vi opfordrer til, at du tager cyklen for at skåne miljøet. Der
                er oprettet særlige cykelparkeringsområder lige ved indgangen
                til festivalpladsen.
              </p>

              <h3>Til Fods</h3>
              <p>
                Hvis du er i nærområdet, kan du nemt gå til festivalpladsen.
                Følg stier og skilte, der guider dig direkte til indgangen.
              </p>

              <p>
                Har du spørgsmål om vejvisning? Kontakt os via vores{" "}
                <b>+45 12 34 56 78</b> eller skriv til os på vores{" "}
                <b>sociale medier</b> – vi er her for at hjælpe dig godt på vej
                til MedieSuset!
              </p>
            </article>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.2088026142173!2d9.964545812963108!3d57.04796537348089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b69856edb3%3A0xe12d94d82c0b02c7!2sTECHCOLLEGE!5e0!3m2!1sen!2sdk!4v1737019689423!5m2!1sen!2sdk"></iframe>
          </GridContainer>
        </SectionWrapper>
        <SectionWrapper customStyling="andetinfo">
          <h2>Andet Praktisk Info</h2>
          <p>
            For at sikre, at du får den bedst mulige oplevelse til MedieSuset,
            har vi samlet nogle ekstra informationer, som kan være nyttige:
          </p>

          <h3>Åbningstider</h3>
          <p>
            Festivalen åbner kl. <b>10:00</b> og lukker kl.{" "}
            <b>23:00</b> hver dag. Vi anbefaler, at du ankommer i god
            tid for at undgå kø ved indgangen.
          </p>

          <h3>Betaling</h3>
          <p>
            På festivalpladsen er det muligt at betale med både kreditkort og
            MobilePay. Vi tager ikke imod kontanter, så husk at have dit
            betalingsmiddel klar.
          </p>

          <h3>Mad og Drikke</h3>
          <p>
            Der vil være et bredt udvalg af madboder og drikkestationer på
            pladsen, som tilbyder alt fra klassiske festivalretter til
            vegetariske og veganske muligheder. Husk at medbringe ID, hvis du
            ønsker at købe alkohol.
          </p>

          <h3>Toiletter og Hygiejne</h3>
          <p>
            Toiletter findes på flere områder på pladsen og vil være tydeligt
            markeret på kortet. Alle toiletter bliver rengjort løbende, så vi
            opretholder en høj hygiejnestandard.
          </p>

          <h3>Kontakt og Hjælp</h3>
          <p>
            Har du spørgsmål eller brug for hjælp under festivalen? Besøg vores
            informationsbod ved hovedindgangen eller kontakt en af vores
            frivillige, som er let genkendelige med deres{" "}
            <b>MedieSuset-trøjer</b>.
          </p>

          <p>
            Vi glæder os til at byde dig velkommen til MedieSuset og skabe
            uforglemmelige oplevelser sammen!
          </p>
        </SectionWrapper>
      </SectionWrapper>
    </>
  );
};
