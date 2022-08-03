import React from "react";
import { Container, Nav, Button, Col, Form, Row, Tab, InputGroup, Breadcrumb } from "react-bootstrap";

function Secure() {
  return (
    <Container className="margin-shop bg-light">
        <Form>
            {/* BreadCrumb */}
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="py-3">Security</h3>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Security</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/* End BreadCrumb */}
            
            {/* Security Account Group */}
            <div className="bg-light help-post">
                {/* Tab Title */}
                <h6 className="bg-light pb-2">Security Account</h6>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        {/* Tab Choice */}
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {/* First Item */}
                                <Nav.Item>
                                    <Nav.Link eventKey="first" href="#">
                                        SMS Verification
                                    </Nav.Link>
                                </Nav.Item>
                                {/* Second Item */}
                                <Nav.Item>
                                    <Nav.Link eventKey="second" href="#">
                                        Email Verification
                                    </Nav.Link>
                                </Nav.Item>
                                {/* Third Item */}
                                <Nav.Item>
                                    <Nav.Link eventKey="third" href="#">
                                        Google Authentication
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        {/* End Tab Choice */}

                        {/* Tab Content */}
                        <Col sm={9}>
                            <Tab.Content>
                                {/* First Content */}
                                <Tab.Pane eventKey="first">
                                    <Container className='bg-white border border-primary'>
                                        <Row>
                                            <Col md className="mb-3">
                                                <Form.Label htmlFor="inputCheckSMSVerif">SMS Verification</Form.Label>
                                                <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="SMS Verification"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="inputSMSPhone">+62</InputGroup.Text>
                                                    <Form.Control
                                                    placeholder="085830393475"
                                                    aria-label="Phone Number"
                                                    aria-describedby="inputSMSPhone"
                                                    disabled
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="inputNewSMSPhone">+62</InputGroup.Text>
                                                    <Form.Control
                                                    placeholder="New Phone Number"
                                                    aria-label="Phone Number"
                                                    aria-describedby="inputNewSMSPhone"
                                                    />
                                                    <Button variant="outline-secondary">SMS PIN</Button>
                                                </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="SMS PIN Verification"
                                                    aria-label="SMS PIN Verification"
                                                    aria-describedby="inputNewSMSPhonePIN"
                                                    />
                                                    <Button variant="outline-secondary">Apply</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                {/* Second Content */}
                                <Tab.Pane eventKey="second">
                                    <Container className='bg-white border border-primary'>
                                        <Row>
                                            <Col md className="mb-3">
                                                <Form.Label htmlFor="inputCheckEmailVerif">Email Verification</Form.Label>
                                                <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Email Verification"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputEmailPhone">email:</InputGroup.Text>
                                                <Form.Control
                                                placeholder="agung.satrio@gmail.com"
                                                aria-label="Email"
                                                aria-describedby="inputEmailVerif"
                                                disabled
                                                />
                                            </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="inputNewEmail">Email</InputGroup.Text>
                                                    <Form.Control
                                                    placeholder="New Email"
                                                    aria-label="New Email"
                                                    aria-describedby="inputNewEmailVerif"
                                                    />
                                                    <Button variant="outline-secondary">Email PIN</Button>
                                                </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="Email PIN Verification"
                                                    aria-label="Email PIN Verification"
                                                    aria-describedby="inputNewEmailVerifPIN"
                                                    />
                                                    <Button variant="outline-secondary">Apply</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                {/* Third Content */}
                                <Tab.Pane eventKey="third">
                                    <Container className='bg-white border border-primary'>
                                        <Row>
                                            <Col md className="mx-3 mb-3">
                                                <Form.Label htmlFor="inputCheckGoogleAuth">Google Authentication</Form.Label>
                                                <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Google Auth"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="asdahdjshakjdhsjajdsahjdhsajdhjkad"
                                                    aria-label="google-auth"
                                                    aria-describedby="inputGoogleAuth"
                                                    />
                                                    <Button variant="outline-secondary">Get PIN</Button>
                                                </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="Google Auth PIN"
                                                    aria-label="Google Auth PIN"
                                                    aria-describedby="inputGoogleAuthPIN"
                                                    />
                                                    <Button variant="outline-secondary">Apply</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        {/* End Tab Content */}
                    </Row>
                </Tab.Container>
            </div>
            {/* End Security Account Group */}

            {/* Security Transaction Group */}
            <div className="bg-light mt-3 help-post">
                {/* Tab Title */}
                <h6 className="bg-light pb-2">Security Transaction</h6>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        {/* Tab Choice */}
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {/* First Item */}
                                <Nav.Item>
                                    <Nav.Link eventKey="first" href="#">
                                        Password Transaction
                                    </Nav.Link>
                                </Nav.Item>
                                {/* Second Item */}
                                <Nav.Item>
                                    <Nav.Link eventKey="second" href="#">
                                        PIN Transaction
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        {/* End Tab Choice */}

                        {/* Tab Content */}
                        <Col sm={9}>
                            <Tab.Content>
                                {/* First Content */}
                                <Tab.Pane eventKey="first">
                                    <Container className='bg-white border border-primary'>
                                        <Row className="bg-light">
                                            <Col md className="bg-light mx-3 mb-3">
                                                <Form.Label htmlFor="inputCheckPasswordTRansact">Password Transaction</Form.Label>
                                                <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Password Transaction"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="">
                                            <Col md>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                placeholder="Password Transaction"
                                                aria-label="password-transac"
                                                aria-describedby="inputPassTransac"
                                                />
                                                <Button variant="outline-secondary">Verif Password</Button>
                                            </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="New Password Transaction"
                                                    aria-label="new-password-transact"
                                                    aria-describedby="inputNewPassTransact"
                                                    />
                                                    <Button variant="outline-secondary">Apply</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                
                                {/* Second Content */}
                                <Tab.Pane eventKey="second">
                                    <Container className='bg-white border border-primary'>
                                        <Row className="bg-light">
                                            <Col md className="bg-light mx-3 mb-3">
                                                <Form.Label htmlFor="inputCheckPINTRansact">PIN Transaction</Form.Label>
                                                <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="PIN Transaction"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="bg-light">
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="PIN Transaction"
                                                    aria-label="pin-transac"
                                                    aria-describedby="inputPINTransac"
                                                    />
                                                    <Button variant="outline-secondary">Verif PIN</Button>
                                                </InputGroup>
                                            </Col>
                                            <Col md>
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    placeholder="New PIN Transaction"
                                                    aria-label="new-pin-transact"
                                                    aria-describedby="inputNewPINTransact"
                                                    />
                                                    <Button variant="outline-secondary">Apply</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        {/* End Tab Content */}
                    </Row>
                </Tab.Container>
            </div>
            {/* End Security Transaction Group */}   
        </Form>
    </Container>
  );
}

export default Secure;
