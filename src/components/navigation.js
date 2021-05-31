import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

const Navigation = () => {

  const data = useStaticQuery(graphql`
    query NavigationQuery {
      site {
        siteMetadata {
          navigation {
            anchor
            label
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar id="mainNav" bg="dark" expand="lg" variant="light" sticky="top"
              style={{ "paddingBottom": ".7rem", "paddingTop": ".7rem" }}>
        <Navbar.Brand href="#home">
          <StaticImage src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega/no_logo4.png" alt={"Logo image"}
                       style={{ width: "35px", height: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            {
              data.site.siteMetadata.navigation.map((element, key) =>
                <Nav.Link key={key} href={element.anchor} className="text-uppercase">{element.label}</Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )

}

export default Navigation
