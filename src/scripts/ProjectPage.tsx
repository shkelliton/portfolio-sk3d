import { Row } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
//PROJECTS - DATA
//
//project 1 -- H.O.M.E.
let p1_Images: string[] = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p1_ImagesDescrip: string[] = ["Hills and mountains", "water", "Banana"];
let p1_Descrip: string =
  "this is a description of HOME, a virtual reality project exploring stuff";
//project 2
let p2_ImagesDescrip: string[] = ["Hills and mountains", "water", "Banana"];

function ProjectPage() {
  return (
    <>
      <h1>Projects</h1>
      <Container>
        <Row>
          <Col>
            <ProjectCard
              heading="H.O.M.E."
              splashImg="src\assets\Day52.jpg"
              date="2022-2023"
              images={p1_Images}
              imagesDescrip={p1_ImagesDescrip}
              cardSplash="src\assets\Day52.jpg"
              cardTitle="H.O.M.E."
              projDescrip={p1_Descrip}
              position="Art Lead"
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              heading=""
              splashImg=""
              date=""
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash=""
              cardTitle="Empty"
              projDescrip=""
              position=""
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              heading=""
              splashImg=""
              date=""
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash=""
              cardTitle="Empty"
              projDescrip=""
              position=""
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            {" "}
            <ProjectCard
              heading=""
              splashImg=""
              date=""
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash=""
              cardTitle="Empty"
              projDescrip=""
              position=""
              infoExtra=""
            ></ProjectCard>
          </Col>
        </Row>

        <Row></Row>
      </Container>
    </>
  );
}

export default ProjectPage;
