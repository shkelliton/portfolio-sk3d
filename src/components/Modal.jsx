import React, { useState } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image"

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

      <Modal fullscreen="true" size = "xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h1>{heading}</h1>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Image fluid="true" src={splashImg} />
              </Col>
              <Col>
                <h2>{position}</h2>
                <h4>{date}</h4>
                <h4>{infoExtra}</h4>
                <p>{projDescrip}</p>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col sm>
                <Image fluid="true" src={images[0]} />
                <h3>{imagesDescrip[0]}</h3>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[1]} />
                <h3>{imagesDescrip[1]}</h3>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Image fluid="true" src={images[2]} />
                <h3>{imagesDescrip[2]}</h3>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[2]} />
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
