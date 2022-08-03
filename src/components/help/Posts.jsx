import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Posts() {
  return (
      <Container className="bg-light">
        <Link to="/help/create-account">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">Create account</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/help/forgot-password">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">Forgot Password</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/help/buy-product">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">Buy Product</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <button className="btn btn-success mb-3">Live Chat?</button>
      </Container>
  );
}

export default Posts;
