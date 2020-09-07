import React from "react";
import "./Navbar.css";
import history from '../history';

import {Navbar, Nav} from 'react-bootstrap'

//handling the navigation
import { HashLink as Link } from "react-router-hash-link";

import 'bootstrap/dist/css/bootstrap.css';

//handling the translations
// import { translate, Trans } from "react-i18next";

class NavbarView extends React.Component {
  render() {
    return (
      // <nav>
      //   <input checked type="checkbox" id="menu-toggle" />
      //   <ul id="menu">
      //     <li>
      //       <div onClick={()=>history.push('/travel')}>
      //         <i className="fas fa-map" />
      //         <span className="description">Travel</span>
      //       </div>
      //     </li>
      //     {/* <li>
      //       <Link to="#RSVP">
      //         <i className="fas fa-envelope-open" />
      //         <span className="description">
      //           {this.props.t("navbar.RSVP", {
      //             framework: "react-i18next"
      //           })}
      //         </span>
      //       </Link>
      //     </li> */}
      //     <li>
      //       <Link to="#aboutUs">
      //         <i className="fas fa-edit" />
      //         <span className="description">
      //           {this.props.t("navbar.contactus", {
      //             framework: "react-i18next"
      //           })}
      //         </span>
      //       </Link>
      //     </li>
      //     <li>
      //       <Link to="#gifts">
      //         <i className="fas fa-gift" />
      //         <span className="description">
      //           {" "}
      //           {this.props.t("navbar.gifts", {
      //             framework: "react-i18next"
      //           })}
      //         </span>
      //       </Link>
      //     </li>
      //   </ul>
      // </nav>
      <Navbar collapseOnSelect variant="light" style={{backgroundColor: '#6c7b68'}} expand="lg" sticky="top">
      <Navbar.Brand href="#" onClick={()=>history.push('/')}>Lauren+Matthew</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  onClick={()=>history.push('/')}>Home</Nav.Link>
        <Nav.Link  onClick={()=>history.push('/travel')}>Travel</Nav.Link>
        <Nav.Link  onClick={()=>history.push('/scheduleOfEvents')}>Schedule of Events</Nav.Link>
        <Nav.Link  href="https://www.zola.com/registry/laurenandmatthewnovember7" target="_blank">Registry</Nav.Link>
        <Nav.Link  onClick={()=>history.push('/thingsToDo')}>Things to Do</Nav.Link>
        <Nav.Link  onClick={()=>history.push('/contactUs')}>Contact Us</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarView;
