import React, { useState } from 'react';
import { Card, Modal, Row, Button } from "react-bootstrap";

const Purchase = props => {
  //Variabel for show Add Model
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  return (
    <>
      {/* Start Card Product*/}
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>Reefer Vessels</Card.Title>
          <Card.Text className="icon-text"> <i class="fas fa-sm fa-tag"></i>  $9300 <del> $9800</del></Card.Text>
          <Card.Text className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center justify-content-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row className="d-flex flex-row justify-content-between">
            <button className="btn col-lg-4 col-md-4 col-sm-4 col-3">
              <a href='/payment'><i class="fas fa-sm fa-credit-card"></i><br /> Pay</a>
            </button>
            <button className="btn col-lg-4 col-md-4 col-sm-4 col-3">
              <a href='/details'><i class="fas fa-sm fa-layer-group"></i><br /> Info</a>
            </button>
            <button className="btn col-lg-4 col-md-4 col-sm-4 col-3" onClick={handleShowAdd}>
              <i class="fas fa-sm fa-shopping-cart"></i><br /> Troll
            </button>
          </Row>
        </Card.Body>
        <Card.Footer className="mb-2">
          <Card.Link href="/"><small className="text-muted"><i class="fas fa-sm fa-clock"></i> 1 Week Ago</small></Card.Link>
        </Card.Footer>
      </Card>
      {/* End Card Product */}

      {/* Star Add Modal */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to add this item to the trolly?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="success" onClick={handleCloseAdd}>
            <a href='/troll' className='text-light'>Order</a>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Add Modal */}
    </>
  );
};

export default Purchase;