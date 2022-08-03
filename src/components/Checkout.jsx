import React, { useState } from 'react';
import { Accordion, useAccordionButton, Breadcrumb, Button, Card, Col, Container, FloatingLabel, Form, Image, Row, Table, Modal } from "react-bootstrap";
import visa from "../assets/client/visa.png";
import mastercard from "../assets/client/mastercard.png";
import amex from "../assets/client/amex.png";

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

  
function Checkout (){
     //Variabel for show Trash Model
    const [showTrash, setShowTrash] = useState(false);
    const handleCloseTrash = () => setShowTrash(false);
    const handleShowTrash = () => setShowTrash(true);
     //Variabel for show Success Model
     const [showSuccess, setShowSuccess] = useState(false);
     const handleCloseSuccess = () => setShowSuccess(false);
     const handleShowSuccess = () => setShowSuccess(true);
    return(
        <Container className="bg-light margin-shop">
            {/* BreadCrumb */}
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="py-3">Checkout</h3>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
                    <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/* End BreadCrumb */}

            {/* Checkout Group */}
            
            <Row className=''>
                <Col md className="mb-3 d-flex flex-column">
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <Image src={visa} alt='visa' width="100" height="50" className='p-2' />
                        <h5><strong>**** **** **** 3475</strong></h5>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6 className='icon-text'>Expiry Date: 09/23</h6>
                            <h6 className='icon-text'>Jamaluddin</h6>
                        </div> 
                     </Container>
                </Col>
                <Col md className="mb-3 d-flex flex-column">
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <Image src={mastercard} alt='mastercard' width="100" height="50" className='p-2' />
                        <h5><strong>**** **** **** 3475</strong></h5>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6 className='icon-text'>Expiry Date: 09/23</h6>
                            <h6 className='icon-text'>Jamaluddin</h6>
                        </div> 
                     </Container>
                </Col>
                <Col md className="mb-3 d-flex flex-column">
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <Image src={amex} alt='amex' width="100" height="50" className='p-2' />
                        <h5><strong>**** **** **** 3475</strong></h5>
                        <div className='d-flex flex-row justify-content-between'>
                            <h6 className='icon-text'>Expiry Date: 09/23</h6>
                            <h6 className='icon-text'>Jamaluddin</h6>
                        </div> 
                     </Container>
                </Col>
            </Row>

            <Card>
                <Card.Body>
                    <Card.Title>Payment Method</Card.Title>
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
                                            <td>Jamaluddin</td>
                                            <td>0433-01-004131-50-1</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>BRI</td>
                                            <td>Jamaluddin</td>
                                            <td>0320-01-013785-50-6</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><i class="fas fa-edit"></i></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>BCA</td>
                                            <td>Jamaluddin</td>
                                            <td>5410-425787</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                            <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="d-flex flex-row">
                                                <Button variant="success" className="mb-3" href='/setting'>
                                                    Add
                                                </Button>
                                            </td>
                                        </tr>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    </Container>

                                    <Container className='bg-white border border-primary'>
                                    <Form>
                                        <Row className="pb-3 px-3">
                                        <h6 className="mt-3">Choose Your Account</h6>
                                        <Col md>
                                        <FloatingLabel controlId="floatingSelectAccountBank" label="Account selects">
                                            <Form.Select aria-label="Account Select">
                                                <option>Account</option>
                                                <option value="1">Jamaluddin - 0433-01-004131-50-1</option>
                                                <option value="2">Jamaluddin - 0320-01-013785-50-6</option>
                                                <option value="3">Jamaluddin - 5410-425787</option>
                                            </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputAccountPrice" label="#30300">
                                            <Form.Control placeholder="$30300" disabled />
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputAccountNumber" label="0433-01-004131-50-1">
                                            <Form.Control placeholder="Banking Number" disabled />
                                            </FloatingLabel>
                                        </Col>
                                        </Row>
                                        <Col xs="auto">
                                        <Button variant="success" className="mb-3" >
                                            Pay
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
                                            <td>Jamaluddin</td>
                                            <td>0433-01-004131-50-1</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>MasterCard</td>
                                            <td>Jamaluddin</td>
                                            <td>5410-425787</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="d-flex flex-row">
                                                <Button variant="success" className="mb-3" href='/setting'>
                                                    Add
                                                </Button>
                                            </td>
                                        </tr>
                                        
                                        </tbody>
                                    </Table>
                                    </Container>
                                    
                                    <Container className='bg-white border border-primary'>
                                    <Form>
                                        <Row className="pb-3 px-3">
                                        <h6 className="mt-3">Choose Your Credit Card</h6>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectAccountBank" label="Account selects">
                                            <Form.Select aria-label="Account Select">
                                                <option>Account Select</option>
                                                <option value="1">Jamaluddin - 0433-01-004131-50-1</option>
                                                <option value="2">Jamaluddin - 5410-425787</option>
                                            </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputPrice" label="$30300">
                                            <Form.Control placeholder="Price" disabled />
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputCVV" label="5410-405700">
                                            <Form.Control placeholder="CVV" disabled />
                                            </FloatingLabel>
                                        </Col>
                                        </Row>
                                        <Col xs="auto">
                                        <Button variant="success" className="mb-3" >
                                            Pay
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
                                            <td>Jamaluddin</td>
                                            <td>0882006710341</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Dana</td>
                                            <td>Jamaluddin</td>
                                            <td>087758571443</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Gopay</td>
                                            <td>Jamaluddin</td>
                                            <td>085830393475</td>
                                            <td className="d-flex flex-row">
                                            <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/setting'><i class="fas fa-edit"></i></a></Button>
                                            <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="d-flex flex-row">
                                                <Button variant="success" className="mb-3" href='/setting'>
                                                    Add
                                                </Button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    </Container>
                                    
                                    <Container className='bg-white border border-primary'>
                                    <Form>
                                        <Row className="pb-3 px-3">
                                        <h6 className="mt-3">Choose Your E-Wallet</h6>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectAccountewallet" label="Account selects">
                                            <Form.Select aria-label="Account Select">
                                                <option>E-Wallet</option>
                                                <option value="1">Dana - Jamaluddin</option>
                                                <option value="2">Ovo - Jamaluddin</option>
                                                <option value="3">Gopay - Jamaluddin</option>
                                            </Form.Select>
                                            </FloatingLabel>
                                        </Col>                       
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputEWalletPrice" label="$30300">
                                            <Form.Control placeholder="Price" disabled />
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputEWalletPayment" label="0822 9898 0909">
                                            <Form.Control disabled placeholder="E-Wallet Name" />
                                            </FloatingLabel>
                                        </Col>
                                        </Row>
                                        <Col xs="auto">
                                        <Button variant="success" className="mb-3" onClick={handleShowSuccess} >
                                            Pay
                                        </Button>
                                        </Col>
                                    </Form>
                                    </Container>
                                </div>
                                </Accordion.Collapse>
                            </Card>
                            {/* End Credit Card */}
                            </Accordion>
                </Card.Body>
            </Card>
            <Row className='mb3'></Row>
            {/* End Checkout Group */}

            {/* Start Success Transaction */}
            <Modal show={showSuccess} onHide={handleCloseSuccess}>
                <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order will be processed, check localhost:3000/track to see the progress</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseSuccess}>
                    Close
                </Button>
                <Button variant="success" onClick={handleCloseSuccess}>
                    <a href='/track' className='text-light'>Check</a>
                </Button>
                </Modal.Footer>
            </Modal>
            {/* End Success Transaction Modal */}

            {/* Star Trash Modal */}
            <Modal show={showTrash} onHide={handleCloseTrash}>
                <Modal.Header closeButton>
                <Modal.Title>Add Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to remove this account?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTrash}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleCloseTrash}>
                    <a href='/setting' className='text-light'>Remove</a>
                </Button>
                </Modal.Footer>
            </Modal>
            {/* End Trash Modal */}
        </Container>
    )
}

export default Checkout;