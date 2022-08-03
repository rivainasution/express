import React, { useState } from 'react';
import { Container, Button, Col, Form, Row, FloatingLabel, InputGroup, Modal, Breadcrumb} from "react-bootstrap";


function Profile() {
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);
  return (
    <Container className="margin-shop bg-light">
      {/* Form Profile */}
      <Form>
        {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Profile</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        {/* Name Group */}
        <Row className="g-4 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingInputFirstName" label="First Name">
              <Form.Control placeholder="Rivai Fansuri" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputLastName" label="Last Name">
                <Form.Control placeholder="Nasution" />
            </FloatingLabel>
          </Col>
        </Row>

        {/* Username Group */}
        <Row className="g-4 mb-3">       
          <Col md>
            <InputGroup className="mb-3">
              <InputGroup.Text id="username">@</InputGroup.Text>
              <Form.Control disabled
                placeholder="rivainasution"
                aria-label="Username"
                aria-describedby="username"
              />
            </InputGroup>
          </Col>
          <Col md>            
            <InputGroup className="mb-3">
              <InputGroup.Text id="new-username">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="new username"
                aria-describedby="new-username"
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Email Group */}
        <Row className="g-4 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingInputEmail" label="rivai_nasution@gmail.com">
              <Form.Control disabled type="email" placeholder="rivai_nasution@gmail.com" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputNewEmail" label="New Email Address">
              <Form.Control type="email" placeholder="new_email@gmail.com" />
            </FloatingLabel>
          </Col>
        </Row>

        {/* Password Group */}
        <Row className="g-4 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingInputPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers,
                  and must not contain spaces, special characters, or emoji.
                </Form.Text>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputNewPassword" label="New Password">
                <Form.Control type="password" placeholder="New Password" />
            </FloatingLabel>
          </Col>
        </Row>

        {/* Address Group */}
        <Row className="g-4 mb-3">
          <Col md>
              <FloatingLabel controlId="floatingInputDate" label="Birth Date">
                <Form.Control type="date" />
              </FloatingLabel>
          </Col>
          <Col md>
          <FloatingLabel controlId="floatingSelectGender" label="Gender">
            <Form.Select aria-label="Gender">
              <option>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
          </FloatingLabel>
          </Col>
        </Row>
        
        {/* Address Group */}
        <Row className="g-4 mb-3">
          <Col md>
              <FloatingLabel controlId="floatingInputAddress" label="Address">
                <Form.Control placeholder="Sudirman Street, No 19 Jakarta" />
              </FloatingLabel>
            </Col>
        </Row>

        <Row className="mb-3">
          <Col md>
            <FloatingLabel
              controlId="floatingSelectProvince"
              label="Province"
            >
              <Form.Select aria-label="Province Select">
                <option>Province</option>
                <option value="1">Jakarta</option>
                <option value="2">Banten</option>
                <option value="3">Jawa Barat</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel
              controlId="floatingSelectCity"
              label="City"
            >
              <Form.Select aria-label="City Select">
                <option>City</option>
                <option value="1">West Jakarta</option>
                <option value="2">East Jakarta</option>
                <option value="3">North Jakarta</option>
                <option value="4">South Jakarta</option>
                <option value="5">Centtral Jakarta</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel controlId="floatingInputZip" label="Zip">
              <Form.Control placeholder="11111" />
            </FloatingLabel>
          </Col>
        </Row>

        {/* Profile Image Group */}
        <Row className="g-4 mb-3">
          <Col md>
            <Form.Group controlId="formFileProfile" className="mb-3">
              <Form.Label>Profile Images</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" id="formCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" onClick={handleShowSave} className="mb-3">
          Submit
        </Button>
      </Form>
      {/* End Form Profile */}

      {/* Modal Save */}
      <Modal show={showSave} onHide={handleCloseSave}>
        <Modal.Header closeButton>
          <Modal.Title>Save Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to save changes?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSave}>
            Close
          </Button>
          <Button variant="success" type='submit' onClick={handleCloseSave}>
            <a href='/profile' className='text-white'>Save</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Profile;