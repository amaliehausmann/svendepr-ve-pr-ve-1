import { useGet } from "../../hooks/useGet";
import { GridContainer } from "../GridContainer/GridContainer";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const NewsSection = () => {
  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/mediesuset/news`
  );

  const slicedData = data?.items?.slice(0, 6);

  return (
    <SectionWrapper customStyling='newsSection'>
      <h1>NYHEDER</h1>
      <GridContainer columns={3}>
        {slicedData?.map((item) => (
          <Card
            key={item.id}
            custom="newsCard"
            image={item.image.replace("/content", "")}
            title={item.title}
            description={item.teaser}
          >
            <Button title="" custom="newscard" color="grey" size="large">
              <NavLink to={`/news/${item.id}`}>LÆS MERE</NavLink>
            </Button>
          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};
