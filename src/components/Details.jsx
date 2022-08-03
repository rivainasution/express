import React, { useState } from 'react';
import { Breadcrumb, Container, ListGroup, InputGroup, Form, Row, Col, Button, Carousel, Image, Table, FloatingLabel, Card } from "react-bootstrap";
import detail1 from "../assets/client/portfolio-details-1.jpg";
import detail2 from "../assets/client/portfolio-details-2.jpg";
import detail3 from "../assets/client/portfolio-details-3.jpg";
import comment1 from "../assets/client/client-2.png";
import comment2 from "../assets/client/client-3.png";
import comment3 from "../assets/client/client-4.png";
import comment4 from "../assets/client/client-5.png";
import owner from "../assets/favicon.png";


function Details(){
  let [count, setCount] = useState(1);
    //increment function
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  //decrement function
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
    return(
        <Container className="bg-light margin-shop">
            {/* BreadCrumb */}
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="py-3">Details Product</h3>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Details</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            {/* End BreadCrumb */}

            {/* Carousel Group */}
            <div class="row flex-row align-items-start">

                {/* Carousel */}
                <div class="col-lg-8 mb-3">
                    <Carousel>
                        <Carousel.Item>
                        <Image
                            className="d-block w-100 height-50"
                            src={detail1}
                            alt="First banner"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                            className="d-block w-100 height-50"
                            src={detail2}
                            alt="Second banner"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                            className="d-block w-100 height-50"
                            src={detail3}
                            alt="Third banner"
                        />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* End Carousel */}
                
                
                {/* Product Info */}
                <div class="col-lg-4">
                    <Container className='bg-white border border-primary'>
                        <h6 className='mt-2'>&#931;-xpress 
                            <i className="fas fa-circle-check ml-1"></i>
                        </h6>
                        <h4>
                            <strong>Container Ships</strong>
                        </h4>
                        <Form.Label className="bg-danger text-light p-1">
                            <i className="fas fa-award mx-1"></i>Best Seller
                        </Form.Label>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <h5>$10000 <del className='icon-text'> $10200</del></h5>
                            <Button variant="success" size='sm'>Chat Seller</Button>
                        </div>
                        <Row className="mb-3">
                            <Col md>
                                <Form.Group controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control placeholder="Jakarta" disabled />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Label>Quantity</Form.Label>
                                <div className="d-flex flex-row">
                                    <Button variant="outline-secondary" size="sm" onClick={decrementCount} className="mr-2">-</Button>{count} MT
                                    <Button variant="outline-secondary" size="sm" onClick={incrementCount} className="ml-2">+</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md>
                            <Form.Label>Total Price</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="buyTotal">$</InputGroup.Text>
                                <Form.Control
                                placeholder={count*10000}
                                disabled
                                />
                            </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md>
                                <Button variant="secondary" className="col-8">
                                    <a href='/troll' className=' text-light'><i className='fas fa-shopping-cart mr-1'></i> Add to Cart</a>
                                </Button>
                                <Button variant="success" className="col-4">
                                    <a href='/payment' className=' text-light'><i className='fas fa-credit-card mr-1'></i> Order </a></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* End Product Info */}
            </div>
            {/* End Carousel Group */}
            

            {/* Group Product Detail */}
            <div class="row flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row align-items-start my-3">
                {/* Product Description Group */}
                <div class="col-lg-8">
                    {/* Product Description */}
                    <Container className='bg-white border border-primary'>
                        <div className='mb-3'>
                            <h4 className='mt-2'>Description Product</h4>
                            <span className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga error quidem sint repellat? Repellendus non doloribus provident assumenda rerum similique, voluptatibus consectetur veritatis recusandae voluptatum nostrum possimus aut. Quos. </span>
                            <br />
                            <span className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga error quidem sint repellat? Repellendus non doloribus provident assumenda rerum similique, voluptatibus consectetur veritatis recusandae voluptatum nostrum possimus aut. Quos. </span>
                            <br />
                            <span className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga error quidem sint repellat? Repellendus non doloribus provident assumenda rerum similique, voluptatibus consectetur veritatis recusandae voluptatum nostrum possimus aut. Quos. </span>
                        </div>
                    </Container>
                    {/* End Product Description */}
                    {/* Product Comment */}
                    <Container className='bg-white border border-primary my-3'>
                        <h4 className='mt-2'>Comment</h4>
                        <div className='d-flex flex-column my-3'>
                            <div className='d-flex flex-row col-12 mb-3'>
                                <Image src={comment1} alt="seller profile" width="45" height="45" className="rounded-circle border border-primary mr-2" />
                                <div className='d-flex flex-column col-11'>
                                    <FloatingLabel controlId="floatingTextareaFeedback" label="Belimo">
                                        <Form.Control 
                                            as="textarea" 
                                            placeholder="Leave your comment here" 
                                            style={{height:'100px'}}
                                        />
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className='d-flex flex-row col-12 mb-3'>
                                <Image src={comment2} alt="seller profile" width="45" height="45" className="rounded-circle border border-primary mr-2" />
                                <div className='d-flex flex-column col-11'>
                                    <Card>
                                        <Card.Header><i className="fas fa-circle-check icon-text"></i> LifeGroups</Card.Header>
                                        <Card.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores hic animi tempore, dolorem odit inventore reprehenderit nesciunt necessitatibus voluptatem. Quisquam corrupti fugit laborum numquam aperiam fugiat repellendus impedit doloremque.
                                            </p>
                                            <footer>
                                                    <div className='d-flex flex-row align-items-between justify-content-between'>
                                                        <div className='d-flex flex-row icon-text align-items-center'>
                                                            <i className='fas fa-clock mr-1'></i> 23 Hours Ago
                                                        </div> 
                                                        <div className='d-flex flex-row icon-text'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                        </div>
                                                    </div>
                                            </footer>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className='d-flex flex-row col-12 mb-3'>
                                <Image src={comment3} alt="seller profile" width="45" height="45" className="rounded-circle border border-primary mr-2" />
                                <div className='d-flex flex-column col-11'>
                                    <Card>
                                        <Card.Header><i className="fas fa-circle-check icon-text"></i> Lilly</Card.Header>
                                        <Card.Body>
                                                <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores hic animi tempore, dolorem odit inventore reprehenderit nesciunt necessitatibus voluptatem. Quisquam corrupti fugit laborum numquam aperiam fugiat repellendus impedit doloremque.
                                                </p>
                                                <footer>
                                                    <div className='d-flex flex-row align-items-between justify-content-between'>
                                                        <div className='d-flex flex-row icon-text align-items-center'>
                                                            <i className='fas fa-clock mr-1'></i> 3 Days Ago
                                                        </div> 
                                                        <div className='d-flex flex-row icon-text'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                        </div>
                                                    </div>  
                                                </footer>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className='d-flex flex-row col-12 mb-2'>
                                <Image src={comment4} alt="seller profile" width="45" height="45" className="rounded-circle border border-primary mr-2" />
                                <div className='d-flex flex-column col-11'>
                                    <Card>
                                        <Card.Header><i className="fas fa-circle-check icon-text"></i> Citrus</Card.Header>
                                        <Card.Body>
                                        <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores hic animi tempore, dolorem odit inventore reprehenderit nesciunt necessitatibus voluptatem. Quisquam corrupti fugit laborum numquam aperiam fugiat repellendus impedit doloremque.
                                                </p>
                                                <footer>
                                                    <div className='d-flex flex-row align-items-between justify-content-between'>
                                                        <div className='d-flex flex-row icon-text align-items-center'>
                                                            <i className='fas fa-clock mr-1'></i> 2 Weeks Ago
                                                        </div> 
                                                        <div className='d-flex flex-row icon-text'>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                            <i className='fas fa-star'></i>
                                                        </div>
                                                    </div>
                                                </footer>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Container>
                    {/* End Product Comment */}
                </div>
                {/* End Product Description Group */}

                {/* Product Detail Group */}
                <div class="col-lg-4 mb-3">
                    <Container className='bg-white border border-primary'>
                        <h5 class="font-weight-light mt-2"><strong>Product Detail</strong></h5>
                        {/* Product Details */}
                        <ListGroup>
                            <ListGroup.Item>
                                <Table>                       
                                    <tbody>
                                       <tr>
                                            <th>Condition</th>
                                            <td>:</td>
                                            <td>New</td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>:</td>
                                            <td>Jakarta</td>
                                        </tr>
                                        <tr>
                                            <th>Capacity</th>
                                            <td>:</td>
                                            <td>10 MT</td>
                                        </tr>
                                        <tr>
                                            <th>Expected Delivery</th>
                                            <td>:</td>
                                            <td>1 Month</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </ListGroup.Item>
                        </ListGroup>
                        {/* End Product Detail */}

                        {/* Seller Detail */}
                        <h5 class="font-weight-light mt-2"><strong>Logistic Service Owner Detail</strong></h5>
                        <ListGroup className="mb-2">
                            <ListGroup.Item>
                            <div className='d-flex flex-row'>
                                <Image src={owner} alt="seller profile" width="45" height="45" className="rounded-circle border border-primary mr-2" />
                                <div className='d-flex flex-column'>
                                    <h6><i className="fas fa-circle-check icon-text"></i> Sigma Express Global</h6>
                                    <div className='icon-text'>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <span> 4.5(720) - <i className='fas fa-home'></i> Jakarta</span>
                                    </div>
                                </div>
                            </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Table  >                       
                                    <tbody>
                                       <tr>
                                            <th>Owned</th>
                                            <td>:</td>
                                            <td>20 Ships</td>
                                        </tr>
                                        <tr>
                                            <th>Available</th>
                                            <td>:</td>
                                            <td>9 Ships</td>
                                        </tr>
                                        <tr>
                                            <th>Being Used</th>
                                            <td>:</td>
                                            <td>11 Ships</td>
                                        </tr>
                                        <tr>
                                            <th>Ship in</th>
                                            <td>:</td>
                                            <td>2 Working Days</td>
                                        </tr>
                                        <tr>
                                            <th>Replied Message</th>
                                            <td>:</td>
                                            <td>10 Minutes</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </ListGroup.Item>
                        </ListGroup>
                        {/* End Seller Detail */}
                    </Container>
                </div>
                {/* End Product Detail */}
            </div>
            {/* End Group Product Detail */}
        </Container>
    );
}
export default Details;