import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Example from "../Modal";

interface Props {
  heading: string;
  splashImg: string;
  date: string;
  images: string[];
  imagesDescrip: string[];
  projDescrip: string;
  position: string;
  infoExtra: string;
  cardSplash: string;
  cardTitle: string;
}

export const ProjectCard = ({
  heading,
  date,
  splashImg,
  images,
  imagesDescrip,
  cardSplash,
  cardTitle,
  projDescrip,
  position,
  infoExtra,
}: Props) => {
  return (
    <>
      <Card style={{ width: "auto" }}>
        <Card.Img variant="top" src={cardSplash} />
        <Card.ImgOverlay>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text></Card.Text>
          <Example
            heading={heading}
            splashImg={splashImg}
            date={date}
            images={images}
            imagesDescrip={imagesDescrip}
            projDescrip={projDescrip}
            position={position}
            infoExtra={infoExtra}
          />
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
//Project Page >> ProjectCard >> ProjectModal
//Have to work out a CDN with data formatting
