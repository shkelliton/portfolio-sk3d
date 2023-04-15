import React, { useState } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const props = {
  heading: "",
  splashImg: "",
  date: "",
  images: [],
  imagesDescrip: [],
  projDescrip: "",
  position: "",
  infoExtra: "",
}
function Example({
  heading,
  date,
  splashImg,
  images,
  imagesDescrip,
  projDescrip,
  position,
  infoExtra,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>See More</Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>{heading}</h1>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src={splashImg} />
              </Col>
              <Col>
                <h2>{position}</h2>
                <h4>{date}</h4>
                <h4>{infoExtra}</h4>
                <p>{projDescrip}</p>
              </Col>
            </Row>
            <br />
            <p>-------- padding here when styling -------</p>
            <Row>
              <Col sm>
                <h1>Block 1 (Image)</h1>
                <img src={images[0]} />
                <h3>{imagesDescrip[0]}</h3>
              </Col>
              <Col sm>
                <h1>Block2</h1>
                <img src={images[1]} />
                <h3>{imagesDescrip[1]}</h3>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <h1>Block 1 (Image)</h1>
                <img src={images[2]} />
                <h3>{imagesDescrip[2]}</h3>
              </Col>
              <Col sm>
                <h1>Block2</h1>
                <img src={images[2]} />
                <h3>{imagesDescrip[2]}</h3>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
