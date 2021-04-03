import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-left">Copyright © Fantamulise {new Date().getFullYear()}</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <StaticImage src='https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega/no_logo4.png' alt={'Logo image'} style={{width: '35px', height: '35px'}}/>
        </div>
        <div className="col-lg-4 text-lg-right">
          <a className="mr-3" href="https://www.angeloparziale.it" target="_blank">AParziale</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
