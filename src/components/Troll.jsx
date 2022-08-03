import React, { useState } from 'react';
import { Container, Modal, Table, Button, Breadcrumb } from "react-bootstrap";

function Troll(){
  // Count for Quantity Product
  let [count, setCount] = useState(1);
  //Variabel for show Add Model
  const [showTrash, setShowTrash] = useState(false);
  const handleCloseTrash = () => setShowTrash(false);
  const handleShowTrash = () => setShowTrash(true);

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
    // Start Trolly
    <Container className="margin-shop bg-light pb-3">
      {/* BreadCrumb */}
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-3">Trolly</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Trolly</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* End BreadCrumb */}

      {/* Table Troll */}
      <Container className='bg-white border border-primary pb-2'>
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Owner</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Container Ships</td>
              <td> $10000 <del> $10200</del></td>
              <td>&#931;-xpress, Jakarta</td>
              <td>
                <div className="d-flex flex-row">
                  <Button variant="outline-secondary" size="sm" onClick={decrementCount} className="mr-2">-</Button>{count}
                  <Button variant="outline-secondary" size="sm" onClick={incrementCount} className="ml-2">+</Button>
                </div>
              </td>
              <td>
                <div className="d-flex flex-row">
                  <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/payment'><i class="fas fa-credit-card"></i></a></Button>
                  <Button variant="outline-secondary" size="sm" className="mr-2"><a href='/details'><i class="fas fa-edit"></i></a></Button>
                  <Button variant="outline-secondary" size="sm" className="mr-2" onClick={handleShowTrash}><i class="fas fa-trash"></i></Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Star Trash Modal */}
      <Modal show={showTrash} onHide={handleCloseTrash}>
        <Modal.Header closeButton>
          <Modal.Title>Add Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to remove this item from trolly?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTrash}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCloseTrash}>
            <a href='/troll' className='text-light'>Remove</a>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Add Modal */}
    </Container>
  );
}
export default Troll;