import { Row } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import "../App.css";
import { Col } from "react-bootstrap";
//PROJECTS - DATA
//
//project 1 -- H.O.M.E.
let p1_Splash = "https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/projects/project1/01_splash.png";
let p1_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p1_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p1_Descrip =
  "this is a description of HOME, a virtual reality project exploring stuff";
//project 2
let p2_Splash = "https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/projects/project2/02_splash.png";
let p2_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p2_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p2_Descrip =
  "this is a description of HOME, a virtual reality project exploring stuff";
//project3
let p3_Splash = "";
let p3_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p3_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p3_Descrip=
  "this is a description of HOME, a virtual reality project exploring stuff";
//project 4
let p4_Splash = "https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/projects/project4/04_splash.png";

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
              splashImg={p1_Splash}
              date="2022-2023"
              images={p1_Images}
              imagesDescrip={p1_ImagesDescrip}
              cardSplash={p1_Splash}
              cardTitle="H.O.M.E."
              projDescrip={p1_Descrip}
              position="Art Lead"
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              heading="Harley Quinn"
              splashImg={p2_Splash}
              date=""
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash={p2_Splash}
              cardTitle="Harley"
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
              splashImg={p4_Splash}
              date=""
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash={p4_Splash}
              cardTitle="Mech-Dragon"
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
