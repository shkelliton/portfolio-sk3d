import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import "../App.css";
export const AboutMe = () => {
  return (
    <Container className="bg-light">
      <br/>
      <Row >
        <Col >
        <br/>
        <br/>
        <br/>
        <div className="text-dark">
          <h1>Shannon Kelly</h1>
          <h2>3D Generalist</h2>
          <p>
            I am a Canadian 3D artist located in Niagara, ON. I have an interest in soft surface modelling, hard surface modelling, and technical art.
          </p>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Image fluid ="true" rounded = "true" src="https://raw.githubusercontent.com/shkelliton/portfolio-sk3d/main/src/assets/avatar_transparent2.PNG.png"/>
        </Col>
      </Row>
      <br/>
      </Container>
  );
};
