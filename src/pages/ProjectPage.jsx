import { Row } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import "../App.css";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
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
  "HOME is a VR experience built as an educational tool to garner empathy towards chosen mental illnesses. I worked as the art team lead for this project, emphasizing usability and consistency of quality. Additionally, I helped teach and guide my team with learning Blender3D.";
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
let p3_Splash = "https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/projects/project3/03_splash.png";
let p3_Images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "Banana",
];
let p3_ImagesDescrip = ["Hills and mountains", "water", "Banana"];
let p3_Descrip=
  "A directed project recreating a black owned saloon from the 1870's with a focus on historical accuracy. I worked with the creative director, doing research and making adjustments based on feedback. I used Blender3D, Substance Painter and Substance Designer.";

  //project 4
let p4_Splash = "https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/projects/project4/04_splash.png";
let p4_Descrip=
  "A weekend exploration of an old character sketch. My goal with this project was to take a character from concept to a usable, textured model. ";
function ProjectPage() {
  return (
    <><Container>
        <Row>
          <h1 className="text-dark">Projects</h1>  
        </Row>
        <Row>
          <Col>
            <ProjectCard
              heading="HOME"
              splashImg={p1_Splash}
              date="2022-2023"
              images={p1_Images}
              imagesDescrip={p1_ImagesDescrip}
              cardSplash={p1_Splash}
              cardTitle="HOME"
              projDescrip={p1_Descrip}
              position="Art Team Lead"
              infoExtra= "homeinvr.ca"
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              heading="Harley Quinn"
              splashImg={p2_Splash}
              date="2023"
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash={p2_Splash}
              cardTitle="Harley Quinn"
              projDescrip={p2_Descrip}
              position="Model/Texture/Rig"
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            <ProjectCard
              heading="Recreation of Black Owned Saloon"
              splashImg={p3_Splash}
              date="2023"
              images={p3_Images}
              imagesDescrip={p3_ImagesDescrip}
              cardSplash={p3_Splash}
              cardTitle="Saloon"
              projDescrip={p3_Descrip}
              position="Models and Textures"
              infoExtra=""
            ></ProjectCard>
          </Col>
          <Col>
            {" "}
            <ProjectCard
              heading="Mecha-Dragon Character"
              splashImg={p4_Splash}
              date="2023"
              images={p1_Images}
              imagesDescrip={p2_ImagesDescrip}
              cardSplash={p4_Splash}
              cardTitle="Mech-Dragon"
              projDescrip={p4_Descrip}
              position="Model/Texture"
              infoExtra=""
            ></ProjectCard>
          </Col>
        </Row>
        </Container>
      </>
    
  );
}

export default ProjectPage;
