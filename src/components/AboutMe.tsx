import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const AboutMe = () => {
  return (
    <Container fluid="xl" className="aboutMe">
      <Row>
        <Col>
          <h1>About</h1>
          <h3>
            I am a Canadian 3D artist working on eventually getting a job,
            please hire me
          </h3>
        </Col>
        <Col xs>
          <img src="src\assets\Day52.jpg" />
          <h1>image of ME</h1>
        </Col>
      </Row>
    </Container>
  );
};
