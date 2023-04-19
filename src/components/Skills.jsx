import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
export const Skills = () => {
  return (
    <>
    <Container fluid ="true" className="bg-primary">
      <Row>
        <Col/>
        <Col>
          <Image fluid="true" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Adobe_Substance_3D_icon.svg"></Image>
          <h4>Substance Painter and Designer</h4>
        </Col>
        <Col>
          <Image fluid = "true" src="https://cdn.worldvectorlogo.com/logos/blender-1.svg"></Image>
          <h4>Blender 3D</h4>
        </Col>
        <Col>
          <Image fluid = "true" src="https://ww1.freelogovectors.net/wp-content/uploads/2018/05/autodesk-maya_logo.png?lossy=1&w=2560&ssl=1"></Image>
          <h4>Maya</h4>
        </Col>
        <Col/>
      </Row>
      </Container>
    </>
  );
};
