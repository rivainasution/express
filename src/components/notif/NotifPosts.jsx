import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotifPosts() {
  return (
      <Container className="bg-light pb-1">
        <Link to="/notif/item-received">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">Item Received</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/notif/pin-activated">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">PIN Transaction Activated</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/notif/success-registration">
          <div class="row align-items-center my-3 help-post">
            <div class="col-lg-12">
              <h6 class="font-weight-light">Successful Registration</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
      </Container>
  );
}

export default NotifPosts;
