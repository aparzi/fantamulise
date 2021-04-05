import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import InfoCompetition from "./modals/info-competition"

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
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal10">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/competitions/serie_a.png'} alt={'Image competition'} />
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
                <StaticImage src={'../images/competitions/champions_league.jpeg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Champions League</div>
                <div className="portfolio-caption-subheading text-muted">Coppa</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/competitions/uefa-europa-league.jpeg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Europa League</div>
                <div className="portfolio-caption-subheading text-muted">Coppa</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/competitions/coppa_italia.webp'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Coppa Italia</div>
                <div className="portfolio-caption-subheading text-muted">Coppa</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/competitions/supercoppa_europa.jpeg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Supercoppa Europea</div>
                <div className="portfolio-caption-subheading text-muted">Supercoppa</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <StaticImage src={'../images/competitions/supercoppa_italia.jpeg'} alt={'Image competition'} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Supercoppa Italiana</div>
                <div className="portfolio-caption-subheading text-muted">Supercoppa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modals */}
    <InfoCompetition/>

  </div>

)

export default Competition
