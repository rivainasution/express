import React, { useState } from 'react';
import { Container, Table, Button, Modal, Breadcrumb} from "react-bootstrap";

function Order(){
  const [showTrash, setShowTrash] = useState(false);
  const handleCloseTrash = () => setShowTrash(false);
  const handleShowTrash = () => setShowTrash(true);

  return(
    <Container className="margin-shop bg-light pb-3">
      {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Order</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Order</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        {/* Form Order */}
      <Container className='bg-white border border-primary pb-2'>
        <Table striped responsive className="mx-3">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Owner Ships</th>
              <th>Picked Up</th>
              <th>Deliverd</th>
              <th>Time</th>
              <th>Transaction Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Gas Carriers</td>
              <td>$12000</td>
              <td>&#931;-xpress, Jakarta</td>
              <td>Tanjung Priok, North Jakarta</td>
              <td>Belawan, North Sumatera</td>
              <td>17 July 2022</td>
              <td>0x3636363636</td>
              <td>Picked by Courier</td>
              <td className="d-flex flex-row">
                <Button variant="outline-secondary" size="sm" className="mr-2" href='/track'><i class="fas fa-truck"></i></Button>
                <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/details'><i class="fas fa-eye"></i></a></Button>
                <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2" disabled><i class="fas fa-trash"></i></Button>
              </td>
              </tr>
                <tr>
                <td>2</td>
                <td>Container Ships</td>
                <td>$7500</td>
                <td>&#931;-xpress, Jakarta</td>
                <td>Merak, Banten</td>
                <td>Bakauheni, Lampung</td>
                <td>27 June 2022</td>
                <td>0x3636363646</td>
                <td><span className='bg-success text-light p-1'>Completed</span></td>
                <td className="d-flex flex-row">
                  <Button variant="outline-secondary" size="sm" className="mr-2" href='/track'><i class="fas fa-truck"></i></Button>
                  <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/details'><i class="fas fa-eye"></i></a></Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Reefer Vessels</td>
                <td>$9000</td>
                <td>JNE, Jakarta</td>
                <td>Tanjung Priok, North Jakarta</td>
                <td>Tanjung Perak, East Java</td>
                <td>7 June 2020</td>
                <td>0x3636363656</td>
                <td><span className='bg-success text-light p-1'>Completed</span></td>
                <td className="d-flex flex-row">
                  <Button variant="outline-secondary" size="sm" className="mr-2" href='/track'><i class="fas fa-truck"></i></Button>
                  <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/details'><i class="fas fa-eye"></i></a></Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleShowTrash} className="mr-2"><i class="fas fa-trash"></i></Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        {/* End Table Order */}

        {/* Modal Trash */}
        <Modal show={showTrash} onHide={handleCloseTrash}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to remove this item from the cart?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTrash}>
              Close
            </Button>
            <Button variant="danger" onClick={handleCloseTrash}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
        {/* End Modal Trash */}
      </Container>
    );
}
export default Order;