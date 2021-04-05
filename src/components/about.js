import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (

  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">L'albo d'oro delle principali competizioni.</h3>
      </div>
      <ul className="timeline">
        <li className="timeline-inverted">
          <div className="timeline-image">
            <StaticImage className="rounded-circle img-fluid" src={'../images/about/start.jpeg'} alt={'Image story'} />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Agosto 2020</h4>
              <h4 className="subheading">Inizio lega Fantamulise</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">
              La fantalega Fantamulise inizia a prendere forma nell'agosto 2020 iniziando a scrivere le prime righe del regolamento.
              Un mese più tardi, è tutto pronto per la prima asta della storia della lega. I dieci fantallenatori si sono riuniti di persona e visti i tempi
              della pandemia non è facile farla di persona ma sono state rispettate tutte le norme sanitarie.</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Segui
              <br />
              la nostra
              <br />
              Storia!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default About
