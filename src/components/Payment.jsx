import React, { useState } from 'react';
import { Breadcrumb, Container, ListGroup, InputGroup, Form, Row, Col, Button, Image, FloatingLabel} from "react-bootstrap";
import product1 from "../assets/nikel.jpeg";

function Payment(){
  let [count, setCount] = useState(1);
  let [count1, setCount1] = useState(1);
  let [count2, setCount2] = useState(1);
    //increment function
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function incrementCount1() {
    count1 = count1 + 1;
    setCount1(count1);
  }
  function incrementCount2() {
    count2 = count2 + 1;
    setCount2(count2);
  }
  //decrement function
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  function decrementCount1() {
    count1 = count1 - 1;
    setCount1(count1);
  }
  function decrementCount2() {
    count2 = count2 - 1;
    setCount2(count2);
  }
    return(
        <Container className="bg-light margin-shop">
            {/* BreadCrumb */}
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="py-3">Payment</h3>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/* End BreadCrumb */}

            {/* Order Group */}
            <div class="row flex-row align-items-start">

                
                <div class="col-lg-8 mb-3">
                    {/* Order */}
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <h4 className='mt-2'>Order</h4>
                        {/* Order List Group */}
                        <ListGroup>
                            {/* First Item Order */}
                            <ListGroup.Item>
                                <Row className="d-flex align-items-center">
                                    <Col md className='d-flex flex-row col-12'>
                                        <Image src={product1} alt='prdouct' width="63" height="63" className='rounded-circle border border-primary' />
                                        <div className='d-flex flex-column col-10'>
                                            <h6><strong>Container Ships</strong></h6>
                                            <h6 className='icon-text'>Capacity:<strong> 10 MT</strong></h6>
                                            <h6 className='icon-text'>Location:<strong> Jakarta</strong></h6>
                                        </div>
                                    </Col>
                                    <Col md className='d-flex flex-row col-12'>
                                        <h6 className="col-8">$10000 <del className='icon-text'> $10200</del></h6>
                                        <div className="d-flex flex-row col-4">
                                            <Button variant="outline-secondary" size="sm" onClick={decrementCount} className="mr-2">-</Button>{count}
                                            <Button variant="outline-secondary" size="sm" onClick={incrementCount} className="ml-2">+</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/* Second Item Order */}
                            <ListGroup.Item>
                                <Row className="d-flex align-items-center">
                                    <Col md className='d-flex flex-row col-12'>
                                        <Image src={product1} alt='prdouct' width="63" height="63" className='rounded-circle border border-primary' />
                                        <div className='d-flex flex-column col-10'>
                                            <h6><strong>Container Ships</strong></h6>
                                            <h6 className='icon-text'>Capacity:<strong> 10 MT</strong></h6>
                                            <h6 className='icon-text'>Location:<strong> Jakarta</strong></h6>
                                        </div>
                                    </Col>
                                    <Col md className='d-flex flex-row col-12'>
                                        <h6 className="col-8">$9000 <del className='icon-text'> $9600</del></h6>
                                        <div className="d-flex flex-row col-4">
                                            <Button variant="outline-secondary" size="sm" onClick={decrementCount1} className="mr-2">-</Button>{count1}
                                            <Button variant="outline-secondary" size="sm" onClick={incrementCount1} className="ml-2">+</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/* Third Item Order */}
                            <ListGroup.Item>
                                <Row className="d-flex align-items-center">
                                    <Col md className='d-flex flex-row col-12'>
                                        <Image src={product1} alt='prdouct' width="63" height="63" className='rounded-circle border border-primary' />
                                        <div className='d-flex flex-column col-10'>
                                            <h6><strong>Container Ships</strong></h6>
                                            <h6 className='icon-text'>Capacity:<strong> 10 MT</strong></h6>
                                            <h6 className='icon-text'>Location:<strong> Jakarta</strong></h6>
                                        </div>
                                    </Col>
                                    <Col md className='d-flex flex-row col-12'>
                                        <h6 className="col-8">$9100 <del className='icon-text'> $9900</del></h6>
                                        <div className="d-flex flex-row col-4">
                                            <Button variant="outline-secondary" size="sm" onClick={decrementCount2} className="mr-2">-</Button>{count2}
                                            <Button variant="outline-secondary" size="sm" onClick={incrementCount2} className="ml-2">+</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        {/* End Order List Group */}
                    </Container>
                    {/* End Order Description */}

                    {/* Delivery */}
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <h4 className='mt-2'>Delivery</h4>
                        <Form>
                            <Row className='mb-3 ml-2'>
                                <Col md className='border border-light mb-3'>
                                    <div className='d-flex flex-row align-items-center'>
                                        <div className='mr-2'>
                                        <Form.Check aria-label='premium' /><i className='fas fa-gem fa-3x text-success'></i>
                                        </div>
                                        
                                        <div className='d-flex flex-column'>
                                            <h6><strong>Premium Class</strong></h6>
                                            <h6 className='icon-text'>Expected Delivery in 14 Days</h6>
                                            <h6 className='icon-text'>$500</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col md className='border border-light'>
                                    <div className='d-flex flex-row align-items-center'>
                                        <div className='mr-2'>
                                            <Form.Check aria-label='premium' /><i className='fas fa-gem fa-3x text-primary'></i>
                                        </div>
                                        
                                        <div className='d-flex flex-column'>
                                            <h6><strong>Specials Class</strong></h6>
                                            <h6 className='icon-text'>Expected Delivery in 10 Days</h6>
                                            <h6 className='icon-text'>$1000</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3 ml-2'>
                                <Col md className='border border-light mb-3'>
                                    <div className='d-flex flex-row align-items-center'>
                                        {/* <Form.Check aria-label='premium' /> */}
                                        <div className='mr-2'>
                                            <Form.Check aria-label='premium' /><i className='fas fa-gem fa-3x text-danger'></i>
                                        </div>
                                        
                                        <div className='d-flex flex-column'>
                                            <h6><strong>Exclusive Class</strong></h6>
                                            <h6 className='icon-text'>Expected Delivery in 7 Days</h6>
                                            <h6 className='icon-text'>$1500</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col md className='border border-light'>
                                    <div className='d-flex flex-row align-items-center'>
                                        <div className='mr-2'>
                                            <Form.Check aria-label='premium' /><i className='fas fa-gem fa-3x text-warning'></i>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <h6><strong>Luxury Class</strong></h6>
                                            <h6 className='icon-text'>Expected Delivery in 3 Days</h6>
                                            <h6 className='icon-text'>$2000</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                    {/* End Delivery */}
                    
                    {/* Additional Service */}
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <h4 className='mt-2'>Additional Service</h4>
                        <Form>
                            <Row>
                                <Col md>
                                    <h6>Agency Partner:</h6>
                                </Col>
                                <Col md>
                                    <Form.Select aria-label="Agency">
                                        <option>Agency</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <h6>PBM Partner:</h6>
                                </Col>
                                <Col md>
                                    <Form.Select aria-label="PBM">
                                        <option>PBM</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <h6>Contract Type:</h6>
                                </Col>
                                <Col md>
                                    <Form.Select aria-label="contract">
                                        <option>Contract</option>
                                        <option value="1">Firm Fixed Price</option>
                                        <option value="2">Cost Reimbursement</option>
                                        <option value="3">Time and Materials</option>
                                        <option value="4">Labor Hour</option>
                                        <option value="5">Indedinite-Delivery</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <h6>Proposal Price:</h6>
                                </Col>
                                <Col md>            
                                    <InputGroup className="mb-3">
                                    <InputGroup.Text id="price">$</InputGroup.Text>
                                    <Form.Control
                                        placeholder="-300"
                                        aria-label="new username"
                                        aria-describedby="new-username"
                                        disabled
                                    />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                    {/* End Additional Service  */}


                    {/* Shipping */}
                    <Container className='bg-white border border-primary mb-3 pb-3'>
                        <h4 className='mt-2'>Shipping</h4>
                        <Form>
                            <Row>
                                <Col md>
                                    <h5 className='mt-4'>Picked-Up</h5>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <ListGroup>
                                                <h6>Last Address</h6>
                                                <div className='d-flex flex-row'>
                                                    <ListGroup.Item><Form.Check aria-label='address' />Tanjung Priok, North Jakarta</ListGroup.Item>
                                                </div>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <h6>New Address</h6>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectProvince" label="Province">
                                                <Form.Select aria-label="Province">
                                                    <option>Province</option>
                                                    <option value="1">East java</option>
                                                    <option value="2">West Java</option>
                                                    <option value="3">Central Java</option>
                                                    <option value="4">Banten</option>
                                                    <option value="5">Jakarta</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectCity" label="City">
                                                <Form.Select aria-label="City">
                                                    <option>City</option>
                                                    <option value="1">East Jakarta</option>
                                                    <option value="2">West Jakarta</option>
                                                    <option value="3">Central JaKarta</option>
                                                    <option value="4">North Jakarta</option>
                                                    <option value="5">South Jakarta</option>
                                                </Form.Select>
                                            </FloatingLabel>           
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectDistricts" label="Districts">
                                                <Form.Select aria-label="Districts">
                                                    <option>Districts</option>
                                                    <option value="1">Cempaka Putih</option>
                                                    <option value="2">Gambir</option>
                                                    <option value="3">Johar Baru</option>
                                                    <option value="4">Kemayoran</option>
                                                    <option value="5">Menteng</option>
                                                    <option value="5">Sawah Besar</option>
                                                    <option value="5">Senen</option>
                                                    <option value="5">Tanah Abang</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputZipCode" label="Zip Code">
                                                <Form.Control placeholder="Zip Code" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <FloatingLabel controlId="floatingTextareaAddress" label="Full Address">
                                                <Form.Control 
                                                    as="textarea" 
                                                    placeholder="Address" 
                                                    style={{height:'100px'}}
                                                />
                                            </FloatingLabel>           
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md>
                                    <h5 className='mt-4'>Delivered</h5>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <ListGroup>
                                                <h6 className='pt-2'>Last Address</h6>
                                                <div className='d-flex flex-row'>
                                                    <ListGroup.Item><Form.Check aria-label='address' />Belawan, North Sumatera</ListGroup.Item>
                                                </div>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <h6>New Address</h6>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectProvince" label="Province">
                                                <Form.Select aria-label="Province">
                                                    <option>Province</option>
                                                    <option value="1">East java</option>
                                                    <option value="2">West Java</option>
                                                    <option value="3">Central Java</option>
                                                    <option value="4">Banten</option>
                                                    <option value="5">Jakarta</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectCity" label="City">
                                                <Form.Select aria-label="City">
                                                    <option>City</option>
                                                    <option value="1">East Jakarta</option>
                                                    <option value="2">West Jakarta</option>
                                                    <option value="3">Central JaKarta</option>
                                                    <option value="4">North Jakarta</option>
                                                    <option value="5">South Jakarta</option>
                                                </Form.Select>
                                            </FloatingLabel>           
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectDistricts" label="Districts">
                                                <Form.Select aria-label="Districts">
                                                    <option>Districts</option>
                                                    <option value="1">Cempaka Putih</option>
                                                    <option value="2">Gambir</option>
                                                    <option value="3">Johar Baru</option>
                                                    <option value="4">Kemayoran</option>
                                                    <option value="5">Menteng</option>
                                                    <option value="5">Sawah Besar</option>
                                                    <option value="5">Senen</option>
                                                    <option value="5">Tanah Abang</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md>
                                            <FloatingLabel controlId="floatingInputZipCode" label="Zip Code">
                                                <Form.Control placeholder="Zip Code" />
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col md>
                                            <FloatingLabel controlId="floatingTextareaAddress" label="Full Address">
                                                <Form.Control 
                                                    as="textarea" 
                                                    placeholder="Address" 
                                                    style={{height:'100px'}}
                                                />
                                            </FloatingLabel>           
                                        </Col>
                                        <Col md> 
                                            <Form.Label>Shipping Cost</Form.Label>
                                            <Form.Control
                                                placeholder="$500"
                                                aria-label="shipping-cost"
                                                aria-describedby="shippingCost"
                                                disabled
                                            />
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Form>
                    </Container>
                    {/* End Shipping */}
                </div>
                
                
                {/* Product Info */}
                <div class="col-lg-4">
                    <Container className='bg-white border border-primary'>
                        <h4 className='mt-2'>Coupon</h4>
                        <div className='bg-danger text-light text-center'>
                            <h6 className='py-2'>Unactivated Account</h6>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <Form.Label>Transaction Code</Form.Label>
                            <Form.Label>TX0001</Form.Label>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between mb-1">
                            <Form.Group className='' controlId='formCoupon'>
                                <Form.Control placeholder='Code Coupon' />
                            </Form.Group>
                            <Button variant="success" size='sm' type='submit'>Apply</Button>
                        </div> 
                        <div class="d-flex flex-column b-bottom dotted my-3">
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Order Summary</h6>
                                <h6>$30300</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Delivery</h6>
                                <h6>$500</h6>
                            </div> 
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Additional Service</h6>
                                <h6>$-300</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Shipping Cost</h6>
                                <h6>$500</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Coupon</h6>
                                <h6>10%</h6>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h6 className='icon-text'>Total Amount</h6>
                                <h6>$27200</h6>
                            </div>
                        </div>
                        <div className='bg-info text-light text-center mb-3'>
                            <h6 className='py-2'>Coupon Expiring in <strong>3 days</strong></h6>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Button variant='success' type='submit' className=' mb-3' href='/checkout'>Checkout</Button>
                        </div>
                        
                    </Container>
                </div>
                {/* End Product Info */}
            </div>
            {/* End Carousel Group */}
            
        </Container>
    );
}
export default Payment;