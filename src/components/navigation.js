import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = () => (

  <Navbar id="mainNav" bg="dark" expand="lg" variant="light" sticky="top">
    <Navbar.Brand href="#home">
      <StaticImage src='https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega/no_logo4.png' alt={'Logo image'} style={{width: '35px', height: '35px'}}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#home" className="text-uppercase">Home</Nav.Link>
        <Nav.Link href="#fantacalcio" className="text-uppercase">Fantacalcio</Nav.Link>
        <Nav.Link href="#competitions" className="text-uppercase">Competizioni</Nav.Link>
        <Nav.Link href="#team" className="text-uppercase">Teams</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

export default Navigation
