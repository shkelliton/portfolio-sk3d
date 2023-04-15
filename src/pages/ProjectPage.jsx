import { Row } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import "../App.css";
import { Col } from "react-bootstrap";
//PROJECTS - DATA
//
//project 1 -- H.O.M.E.
let p1_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p1_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p1_Descrip =
  "this is a description of HOME, a virtual reality project exploring stuff";
//project 2
let p2_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p2_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p2_Descrip =
  "this is a description of HOME, a virtual reality project exploring stuff";
//project3
let p3_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p3_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p3_Descrip=
  "this is a description of HOME, a virtual reality project exploring stuff";
function ProjectPage() {
  return (
    <>
        <Row>
          <h1>Projects</h1>  
        </Row>
        <Row>
          <Col>
            <ProjectCard
              heading="H.O.M.E."
              splashImg="src\assets\r3_avatar.png"
              date="2022-2023"
              images={p1_Images}
              imagesDescrip={p1_ImagesDescrip}
              cardSplash="src\assets\r3_avatar.png"
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
      </>
    
  );
}

export default ProjectPage;
