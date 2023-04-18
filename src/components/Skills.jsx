import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
export const Skills = () => {
  return (
    <>
      <Row>
        <Col/>
        <Col>
          <Image fluid="true" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Adobe_Substance_3D_icon.svg"></Image>
        </Col>
        <Col>
          <Image fluid = "true" src="https://www.blender.org/wp-content/uploads/2020/07/blender_logo_no_socket_black.png"></Image>
        </Col>
        <Col>
          <Image fluid = "true" src="https://ww1.freelogovectors.net/wp-content/uploads/2018/05/autodesk-maya_logo.png?lossy=1&w=2560&ssl=1"></Image>
        </Col>
        <Col/>
      </Row>
    </>
  );
};
