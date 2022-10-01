import React from "react";
import styles from "./style.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className={styles.navBar}>
      <Navbar.Brand href="#home" className={styles.logo}>
        JESPER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navColapse}>
        <Nav className="me-auto">
          <Nav.Link href="#home" className={styles.navLink}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" className={styles.navLink}>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}