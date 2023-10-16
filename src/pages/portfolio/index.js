import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Container, Row, Col, Button} from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Modal from 'react-bootstrap/Modal'
import img1 from '../../assets/images/1583952355.1997.jpg';
import img2 from '../../assets/images/basicjava.png';
import img3 from '../../assets/images/battlegame.png';
import img4 from '../../assets/images/antsim.png';
import img5 from '../../assets/images/basedefense.png';
import img6 from '../../assets/images/IMG_9235.JPG';
import img7 from '../../assets/images/FwNVXsGWIAARj-Q.jpeg';
import img8 from '../../assets/images/codeclock.png';

export const Portfolio = () => {

    const [show0, setShow0] = useState(false);
    const handleClose0 = () => setShow0(false);
    const handleShow0 = () => setShow0(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          <div key={0} className="po_item" onClick={handleShow0}>
            <img src={img1} alt=""/>
            <span className="project-date">{dataportfolio[0].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[0].title}</p>
            </div>
          </div>

          <br/>

          <div key={1} className="po_item" onClick={handleShow1}>
            <img src={img2} alt=""/>
            <span className="project-date">{dataportfolio[1].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[1].title}</p>
            </div>
          </div>

          <br/>

          <div key={2} className="po_item" onClick={handleShow2}>
            <img src={img3} alt=""/>
            <span className="project-date">{dataportfolio[2].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[2].title}</p>
            </div>
          </div>

          <br/>

          <div key={3} className="po_item" onClick={handleShow3}>
            <img src={img4} alt=""/>
            <span className="project-date">{dataportfolio[3].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[3].title}</p>
            </div>
          </div>

          <br/>

          <div key={4} className="po_item" onClick={handleShow4}>
            <img src={img5} alt=""/>
            <span className="project-date">{dataportfolio[4].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[4].title}</p>
            </div>
          </div>

          <br/>

          <div key={5} className="po_item" onClick={handleShow5}>
            <img src={img6} alt=""/>
            <span className="project-date">{dataportfolio[5].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[5].title}</p>
            </div>
          </div>

          <br/>

          <div key={6} className="po_item" onClick={handleShow6}>
            <img src={img7} alt=""/>
            <span className="project-date">{dataportfolio[6].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[6].title}</p>
            </div>
          </div>

          <br/>

          <div key={7} className="po_item" onClick={handleShow7}>
            <img src={img8} alt=""/>
            <span className="project-date">{dataportfolio[7].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[7].title}</p>
            </div>
          </div>

        </div>

        <Modal className="my-modal" size="lg" show={show0} onHide={handleClose0}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[0].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img1} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[0].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[0].description}</p>
            </div>
            <a href={dataportfolio[0].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose0}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[1].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img2} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[1].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[1].description}</p>
            </div>
            <a href={dataportfolio[1].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[2].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img3} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[2].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[2].description}</p>
            </div>
            <a href={dataportfolio[2].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[3].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img4} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[3].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[3].description}</p>
            </div>
            <a href={dataportfolio[3].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[4].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img5} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[4].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[4].description}</p>
            </div>
            <a href={dataportfolio[4].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show5} onHide={handleClose5}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[5].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img6} alt="" className="modalimg2"/>
            <br/>
            <span className="project-date">{dataportfolio[5].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[5].description}</p>
            </div>
            <a href={dataportfolio[5].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show6} onHide={handleClose6}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[6].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img7} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[6].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[6].description}</p>
            </div>
            <a href={dataportfolio[6].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose6}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal className="my-modal" size="lg" show={show7} onHide={handleClose7}>
          <Modal.Header closeButton>
            <h1>{dataportfolio[7].title}</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={img8} alt="" className="modalimg"/>
            <br/>
            <span className="project-date">{dataportfolio[7].startDate}</span>
            <br/>
            <div className="content">
              <p>{dataportfolio[7].description}</p>
            </div>
            <a href={dataportfolio[7].link}>View Project</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose7}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
