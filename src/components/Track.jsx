import React from 'react';
import { Container, Breadcrumb, Row, Col, Image} from "react-bootstrap";
import product1 from "../assets/nikel.jpeg";

function Track(){
  return(
    <Container className="margin-shop bg-light pb-3">
      {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Tracking</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/order">Order</Breadcrumb.Item>
            <Breadcrumb.Item active>Track</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        {/* Tracking */}
        <h5 className=''>Order Id: 0x3636363636</h5>
        <Container className=''>
            <Row className="p-2 mb-3 bg-white border border-primary">
                <Col md className='d-flex flex-column mb-3'>
                    <h6><strong>Estimated Delivery:</strong></h6>
                    <h6>17 September 2022</h6>
                </Col>
                <Col md className='d-flex flex-column mb-3'>
                    <h6><strong>Shipping By:</strong></h6>
                    <h6> &#931;-xpress | +62 822 222 2222</h6>
                </Col>
                <Col md className='d-flex flex-column mb-3'>
                    <h6><strong>Status:</strong></h6>
                    <h6>Picked by Courier</h6>
                </Col>
                <Col md className='d-flex flex-column mb-3'>
                    <h6><strong>Tracking Number:</strong></h6>
                    <h6>AUG2022000001</h6>
                </Col>
            </Row>
                <div class="track">
					<div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order confirmed</span> </div>
					<div class="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> Picked by courier</span> </div>
					<div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
					<div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Ready for pickup</span> </div>
				</div>
            <Row className="p-2 mb-3 bg-white border border-primary">
                <Col md className='d-flex flex-column mb-3'>
                    <div className='d-flex flex-row'>
                        <Image src={product1} alt='product' width="63" height="63" />
                        <div className='d-flex flex-column'>
                            <tbody>
                                <tr>
                                    <th>Location</th>
                                    <td>:</td>
                                    <td>Maluku</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>:</td>
                                    <td>2 MT</td>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <td>:</td>
                                    <td>17 September</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>   
                </Col>
                <Col md className='d-flex flex-column mb-3'>
                    <div className='d-flex flex-row'>
                    <Image src={product1} alt='product' width="63" height="63" />
                        <div className='d-flex flex-column'>
                            <tbody>
                                <tr>
                                    <th>Location</th>
                                    <td>:</td>
                                    <td>Maluku</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>:</td>
                                    <td>2 MT</td>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <td>:</td>
                                    <td>17 September</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>   
                </Col>
                <Col md className='d-flex flex-column mb-3'>
                    <div className='d-flex flex-row'>
                    <Image src={product1} alt='product' width="63" height="63" />
                        <div className='d-flex flex-column'>
                            <tbody>
                                <tr>
                                    <th>Location</th>
                                    <td>:</td>
                                    <td>Maluku</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>:</td>
                                    <td>2 MT</td>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <td>:</td>
                                    <td>17 September</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>   
                </Col>
                <Col md className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                    <Image src={product1} alt='product' width="63" height="63" />
                        <div className='d-flex flex-column'>
                            <tbody>
                                <tr>
                                    <th>Location</th>
                                    <td>:</td>
                                    <td>Maluku</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>:</td>
                                    <td>2 MT</td>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <td>:</td>
                                    <td>17 September</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>   
                </Col>
            </Row>
        </Container>
        {/* End Tracking */}

      </Container>
    );
}
export default Track;