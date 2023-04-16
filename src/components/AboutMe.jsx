import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
export const AboutMe = () => {
  return (
      <Row>
        <Col>
          <h1>Shannon Kelly</h1>
          <h3>
            I am a Canadian 3D artist working on eventually getting a job,
            please hire me
          </h3>
        </Col>
        <Col xs>
          <img id="aboutMe" src="https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/r3_avatar.png"/>
        </Col>
      </Row>
  );
};
