import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Cargo,
  Shipment,
  Profile,
  Setting,
  Secure,
  Order,
  Troll,
  Details,
  Feedback,
  Payment,
  Track,
  Checkout,
  Notif,
  NotifPosts,
  NotifPost,
  Help,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cargo" element={<Cargo />} />
      <Route path="/shipment" element={<Shipment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/secure" element={<Secure />} />
      <Route path="/order" element={<Order />} />
      <Route path="/troll" element={<Troll />} />
      <Route path="/details" element={<Details />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/track" element={<Track /> } />
      <Route path="/notif" element={<Notif />}>
        <Route path="" element={<NotifPosts />} />
        <Route path=":postSlug" element={<NotifPost />} />
      </Route>
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/help" element={<Help />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();