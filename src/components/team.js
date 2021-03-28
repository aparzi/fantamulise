import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Team = () => (
  <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="team-member">
            <StaticImage src={'../images/team/1.jpg'} alt={'Team 1'} />
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <StaticImage src={'../images/team/2.jpg'} alt={'Team 2'} />
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <StaticImage src={'../images/team/3.jpg'} alt={'Team 3'} />
            <h4>Diana Petersen</h4>
            <p className="text-muted">Lead Developer</p>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
          ea, alias ut unde.</p></div>
      </div>
    </div>
  </section>
)

export default Team
