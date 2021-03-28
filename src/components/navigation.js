import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = () => (

  <Navbar id="mainNav" bg="dark" expand="lg" variant="light" sticky="top">
    <Navbar.Brand href="#home">
      <StaticImage src={'../images/navbar-logo.svg'} alt={'Logo image'} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#home" className="text-uppercase">Intro</Nav.Link>
        <Nav.Link href="#services" className="text-uppercase">Services</Nav.Link>
        <Nav.Link href="#competitions" className="text-uppercase">Competitions</Nav.Link>
        <Nav.Link href="#teams" className="text-uppercase">Teams</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  // <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  //   <div className="container">
  //     <a className="navbar-brand js-scroll-trigger" href="#page-top">
  //       <StaticImage src={'../images/navbar-logo.svg'} alt={'Logo image'} />
  //     </a>
  //     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
  //             data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
  //             aria-label="Toggle navigation">
  //       Menu
  //       <i className="fas fa-bars ml-1"></i>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarResponsive">
  //       <ul className="navbar-nav text-uppercase ml-auto">
  //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
  //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
  //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
  //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
  //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>

)

export default Navigation
