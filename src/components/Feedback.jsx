import React, { useState } from 'react';
import { Container, Col, Form, Row, FloatingLabel, Button, Modal, Breadcrumb } from 'react-bootstrap';

function Feedback() {
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);
  return (
    <Container className="margin-shop bg-light">
      {/* Form Feedback */}
      <Form>
        {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Feedback</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        {/* Feedback Group */}
        <Row className="g-4 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingInputFeedbackName" label="Name">
              <Form.Control placeholder="Rivai Nasution" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputFeedbackEmail" label="Email">
                <Form.Control placeholder="rivai.nasution@gmail.com" />
            </FloatingLabel>
          </Col>
          <Col md>
          <FloatingLabel controlId="floatingSelectFeedbackAbout" label="About">
            <Form.Select aria-label="Feedback">
              <option>Account</option>
              <option value="1">Transaction</option>
              <option value="2">Top up</option>
            </Form.Select>
          </FloatingLabel>
          </Col>
        </Row>

        <Row className="g-4 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingTextareaFeedback" label="Comments">
                <Form.Control 
                    as="textarea" 
                    placeholder="Leave your feedback here" 
                    style={{height:'100px'}}
                />
            </FloatingLabel>
          </Col>
        </Row>

        <Form.Group className="mb-3" id="formCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" onClick={handleShowSave} className="mb-3">
          Submit
        </Button>
      </Form>
      {/* End Form Feedback */}

      {/* Modal Save */}
      <Modal show={showSave} onHide={handleCloseSave}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to save changes?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSave}>
            Close
          </Button>
          <Button variant="success" type='submit' onClick={handleCloseSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Save */}
    </Container>
  );
}

export default Feedback;