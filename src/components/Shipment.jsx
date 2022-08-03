import React, { useState } from 'react';
import { Card, Col, Container, Modal, Row, Form, Button, Breadcrumb } from "react-bootstrap";
import data from "./TemplateDataCargo.json";

function Shipment() {
  const [searchTerm, setSearchTerm] = useState("");

  //Variabel for show Add Model
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  
  return (
    <Container className="margin-shop bg-light">
      {/* BreadCrumb */}
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-3">Shipment</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Shipment</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* End BreadCrumb */}
      
      {/* Product Container */}
      <div className='d-flex flex-row align-items-center mb-3'>
        <div className='col-4'>
          <Form.Control
              id='searchInput'
              type="search"
              placeholder="Search . . ."
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}
          />
        </div>
        <div className='col-8 d-flex flex-row'>
          <Button variant='outline-info' size='sm' className='mx-1'>Price</Button>
          <Button variant='outline-info' size='sm' className='mx-1'>Location</Button>
          <Button variant='outline-info' size='sm' className='mx-1'>Size</Button>
          <Button variant='outline-info' size='sm' className='mx-1'>Time</Button>
        </div>
      </div>
          
      <Row xs={2} sm={2} md={3} lg={4} className="g-2">
        {
          data 
            .filter((val) => {
              if(searchTerm === ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val) => {
              return(
                <Col className="my-3" key={val.id}>
                <Card>
                  <Card.Img variant="top" src={val.image} width="270" height="180"/>
                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text className="icon-text d-flex flex-column"> 
                    <i class="fas fa-sm fa-tag p-1"></i>${val.price} <del className='icon-text'>${val.before}</del>
                      <tbody>
                        <tr>
                          <th className='p-1'><i class="fas fa-sm fa-filter"></i></th>
                          <td className='p-1'>{val.Category}</td>
                          <th className='p-1'><i class="fas fa-sm fa-map-marker"></i></th>
                          <td className='p-1'>{val.location}</td>
                        </tr>
                        <tr>
                          <th className='p-1'><i class="fas fa-sm fa-cannabis"></i></th>
                          <td className='p-1'> {val.size}</td>
                          <th className='p-1'><i class="fas fa-sm fa-clock"></i></th>
                          <td className='p-1'>{val.time}</td>
                        </tr>
                      </tbody>
                    </Card.Text>
                    <Card.Text className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center justify-content-center">
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Row className="d-flex flex-row justify-content-between">
                      <button className="btn col-lg-4 col-md-4 col-sm-4 col-4">
                        <a href='/payment'><i class="fas fa-sm fa-credit-card"></i> <h6 className="font-icon">Buy</h6></a>
                      </button>
                      <button className="btn col-lg-4 col-md-4 col-sm-4 col-4">
                        <a href='/details'><i class="fas fa-sm fa-layer-group"></i><h6 className="font-icon">Info</h6></a>
                      </button>
                      <button className="btn col-lg-4 col-md-4 col-sm-4 col-4 " onClick={handleShowAdd}>
                          <i class="fas fa-sm fa-shopping-cart"></i><h6 className="font-icon">Troll</h6>
                      </button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> 
              )
            })
          }
        </Row>
        {/* End Product Container */}

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
            <a href='/troll' className='text-light'>Add</a>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Add Modal */}
    </Container>
  );
}

export default Shipment;
