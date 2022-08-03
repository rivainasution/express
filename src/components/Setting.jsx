import React, { useState } from 'react';
import { Card, Col, Container, Modal, Table, Row, Form, Button, useAccordionButton, Accordion, FloatingLabel, Breadcrumb } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Setting() {
  // Variabel for show Buy Model
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  //Variabel for show Add Model
  const [showTrash, setShowTrash] = useState(false);
  const handleCloseTrash = () => setShowTrash(false);
  const handleShowTrash = () => setShowTrash(true);

  return (
    <Container className="margin-shop bg-light">
      <Form>
        {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Setting</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Setting</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        {/* Check Group */}
        <Row className="pb-3">
          {/* Dark Mode */}
          <Col md>
            <Form.Label htmlFor="inputCheckMode">Dark Mode</Form.Label>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Dark Mode"
            />
          </Col>
          {/* Language Mode */}
          <Col md>
            <Form.Label htmlFor="inputCheckLanguage">Indonesian Language</Form.Label>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Indonesian"
            />
          </Col>
        </Row>
        {/* End Check Group */}

        {/* Payment Method */}
        <Row className="pb-3">
          <h5>Payment Method</h5>
          <Col md>
            <Accordion defaultActiveKey="2">
              {/* Internet Banking */}
              <Card className='bg-light'>
                <Card.Header>
                  <CustomToggle eventKey="0">Internet Banking</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <Container className='bg-white my-3 pb-2 border border-primary'>
                      <h6 className="ml-3 my-3">Account Bank</h6>
                      <Table striped responsive className="mx-3 ">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Banking</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>BRI</td>
                            <td>Abdul Jabbar</td>
                            <td>0433-01-004131-50-1</td>
                            <td className="d-flex flex-row">
                              <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>BRI</td>
                            <td>Anas Nasrudin</td>
                            <td>0320-01-013785-50-6</td>
                            <td className="d-flex flex-row">
                              <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>BCA</td>
                            <td>Agung Saputro</td>
                            <td>5410-425787</td>
                            <td className="d-flex flex-row">
                              <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Container>

                    <Container className='bg-white border border-primary'>
                      <Form>
                        <Row className="pb-3 px-3">
                          <h6 className="mt-3">Add New Account</h6>
                          <Col md>
                            <FloatingLabel controlId="floatingSelectBank" label="Bank selects">
                              <Form.Select aria-label="Bank Select">
                                <option>Bank</option>
                                <option value="1">BRI</option>
                                <option value="2">BNI</option>
                                <option value="3">Mandiri</option>
                                <option value="4">BCA</option>
                                <option value="5">Syariah</option>
                              </Form.Select>
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputBehalfOf" label="on Behalf of">
                              <Form.Control placeholder="on Behalf of" />
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputBankingNumber" label="Banking Number">
                              <Form.Control placeholder="Banking Number" />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Col xs="auto">
                          <Button variant="success" className="mb-3" onClick={handleShowAdd}>
                            Add
                          </Button>
                        </Col>
                      </Form>
                    </Container>
                  </div>
                </Accordion.Collapse>
              </Card>
              {/* End Internet Banking */}

              {/* Credit Card */}
              <Card className='bg-light'>
                <Card.Header>
                  <CustomToggle eventKey="1">Credit Card</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <div>
                    <Container className='bg-white my-3 pb-2 border border-primary'>
                      <h6 className="ml-3 my-3">Account Credit Card</h6>
                      <Table striped responsive className="mx-3 ">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Banking</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Visa</td>
                            <td>Abdul Jabbar</td>
                            <td>0433-01-004131-50-1</td>
                            <td className="d-flex flex-row">
                              <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>MasterCard</td>
                            <td>Agung Saputro</td>
                            <td>5410-425787</td>
                            <td className="d-flex flex-row">
                              <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Container>
                    
                    <Container className='bg-white border border-primary'>
                      <Form>
                        <Row className="pb-3 px-3">
                          <h6 className="mt-3">Add New Credit Card</h6>
                          <Col md>
                            <FloatingLabel controlId="floatingSelectBank" label="Bank selects">
                              <Form.Select aria-label="Bank Select">
                                <option>Credit Card</option>
                                <option value="1">Visa</option>
                                <option value="2">MasterCard</option>
                                <option value="3">Amex</option>
                              </Form.Select>
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputOwner" label="Owner">
                              <Form.Control placeholder="Owner" />
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputCVV" label="CVV">
                              <Form.Control placeholder="CVV" />
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputExpiired" label="Expired Date">
                              <Form.Control type="date" />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Col xs="auto">
                          <Button variant="success" className="mb-3" onClick={handleShowAdd}>
                            Add
                          </Button>
                        </Col>
                      </Form>
                    </Container>
                  </div>
                </Accordion.Collapse>
              </Card>
              {/* End Credit Card */}

              {/* E-Wallet */}
              <Card className='bg-light'>
                <Card.Header>
                  <CustomToggle eventKey="2">E-Wallet</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <div>
                    <Container className='bg-white my-3 pb-2 border border-primary'>
                      <h6 className="ml-3 my-3">Account E-Wallet</h6>
                      <Table striped responsive className="mx-3 ">
                        <thead>
                          <tr>
                            <th></th>
                            <th>E-Wallet</th>
                            <th>Ovo</th>
                            <th>Dana</th>
                            <th>Gopay</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Ovo</td>
                            <td>Abdul Jabbar</td>
                            <td>0882006710341</td>
                            <td className="d-flex flex-row">
                            <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Dana</td>
                            <td>Agung Saputro</td>
                            <td>087758571443</td>
                            <td className="d-flex flex-row">
                            <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Gopay</td>
                            <td>Anas Nasrudin</td>
                            <td>085830393475</td>
                            <td className="d-flex flex-row">
                            <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                              <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Container>
                    
                    <Container className='bg-white border border-primary'>
                      <Form>
                        <Row className="pb-3 px-3">
                          <h6 className="mt-3">Add New E-Wallet</h6>
                          <Col md>
                            <FloatingLabel controlId="floatingSelectBank" label="Bank selects">
                              <Form.Select aria-label="Bank Select">
                                <option>E-Wallet</option>
                                <option value="1">Ovo</option>
                                <option value="2">Dana</option>
                                <option value="3">Gopay</option>
                              </Form.Select>
                            </FloatingLabel>
                          </Col>                       
                          <Col md>
                            <FloatingLabel controlId="floatingInputEWalletNumber" label="Phone Number">
                              <Form.Control placeholder="Phone Number" />
                            </FloatingLabel>
                          </Col>
                          <Col md>
                            <FloatingLabel controlId="floatingInputEWalletName" label="E-Wallet Name">
                              <Form.Control disabled placeholder="E-Wallet Name" />
                            </FloatingLabel>
                          </Col>
                        </Row>
                        <Col xs="auto">
                          <Button variant="success" className="mb-3" onClick={handleShowAdd}>
                            Add
                          </Button>
                        </Col>
                      </Form>
                    </Container>
                  </div>
                </Accordion.Collapse>
              </Card>
              {/* End Credit Card */}
            </Accordion>
          </Col>
        </Row>
        {/* End Payment Method */}
      </Form>

      {/* Modal Add */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to add this item to the table?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="success" onClick={handleCloseAdd}>
            <a href='/setting' className='text-light'>Add</a>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Add Modal */}

      {/* Modal Trash */}
      <Modal show={showTrash} onHide={handleCloseTrash}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to remove this item from table?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTrash}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCloseTrash}>
            <a href='/setting' className='text-light'>Remove</a>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Add Modal */}
    </Container>
  );
}

export default Setting;