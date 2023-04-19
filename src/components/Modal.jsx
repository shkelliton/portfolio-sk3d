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
                <p>{imagesDescrip[0]}</p>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[1]} />
                <p>{imagesDescrip[1]}</p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Image fluid="true" src={images[2]} />
                <p>{imagesDescrip[2]}</p>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[3]} />
                <p>{imagesDescrip[3]}</p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Image fluid="true" src={images[4]} />
                <p>{imagesDescrip[4]}</p>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[5]} />
                <p>{imagesDescrip[5]}</p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Image fluid="true" src={images[6]} />
                <p>{imagesDescrip[6]}</p>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[7]} />
                <p>{imagesDescrip[7]}</p>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Image fluid="true" src={images[8]} />
                <p>{imagesDescrip[8]}</p>
              </Col>
              <Col sm>
                <Image fluid="true" src={images[9]} />
                <p>{imagesDescrip[9]}</p>
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
