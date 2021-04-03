import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Competition = () => (

  <div>

    <section className="page-section bg-light" id="competitions">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Competizioni</h2>
          <h3 className="section-subheading text-muted">Le competizioni della nostra lega.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/01-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Serie A</div>
                <div className="portfolio-caption-subheading text-muted">Campionato</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/02-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Explore</div>
                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/03-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Finish</div>
                <div className="portfolio-caption-subheading text-muted">Identity</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/04-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Lines</div>
                <div className="portfolio-caption-subheading text-muted">Branding</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/05-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Southwest</div>
                <div className="portfolio-caption-subheading text-muted">Website Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/portfolio/06-thumbnail.jpg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Window</div>
                <div className="portfolio-caption-subheading text-muted">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                    expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>Date: January 2020</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default Competition
