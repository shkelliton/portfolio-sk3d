import { Card } from "react-bootstrap";
import Example from "./Modal";

const props = {
  heading: "",
  splashImg: "",
  date: "",
  images: [],
  imagesDescrip: [],
  projDescrip: "",
  position: "",
  infoExtra: "",
  cardSplash: "",
  cardTitle: "",
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
}) => {
  return (
    <>
      <Card style={{ width: "auto" }}>
        <Card.Img variant="top" src={cardSplash} />
        <Card.ImgOverlay>
          <Card.Title className="text-light">{cardTitle}</Card.Title>
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
