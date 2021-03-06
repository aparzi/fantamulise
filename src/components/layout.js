/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import '../css/style.css';

import Footer from "./footer"
import Navigation from "./navigation"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Navigation/>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
