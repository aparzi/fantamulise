import * as React from "react"
import { withPrefix } from "gatsby-link"

const Header = () => (
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome to Fantacalcio Molise!</div>
      <div className="masthead-heading text-uppercase">Lega Fantamulise</div>
      <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href={withPrefix('./Regolamento_2021_2022.pdf')} target="_blank">Regolamento</a>
    </div>
  </header>
)

export default Header
