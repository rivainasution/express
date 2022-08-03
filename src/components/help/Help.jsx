import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Help() {
  return (
    <div className="margin-shop">
      <Container className="bg-light">
        {/* BreadCrumb */}
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="py-3">Help</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Help</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* End BreadCrumb */}
        <Outlet />
      </Container>
    </div>
  );
}

export default Help;