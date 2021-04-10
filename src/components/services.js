import * as React from "react"

const Services = () => (
  <section className="page-section" id="fantacalcio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Fantacalcio</h2>
        <h3 className="section-subheading text-muted">Le basi fondamentali della nostra lega.</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
              <i className="fas fa-heartbeat fa-stack-1x fa-inverse font-size-5rem text-primary"/>
          </span>
          <h4 className="my-3">Passione</h4>
          <p className="text-muted">Tutti i partecipanti della lega Fantamulise condividono un unico grande ideale... La passione per il Fantacalcio.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
              <i className="fas fa-smile fa-stack-1x fa-inverse font-size-5rem text-primary"/>
          </span>
          <h4 className="my-3">Divertimento</h4>
          <p className="text-muted">La lega Fantamulise è basata su semplici ideali, per garantire il benessere tra i fantallenatori... Serietà ma soprattutto il divertimento.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
              <i className="fas fa-trophy fa-stack-1x fa-inverse font-size-5rem text-primary"/>
          </span>
          <h4 className="my-3">Competizione</h4>
          <p className="text-muted">Come in un buon fantacalcio che si rispetti... All'interno della lega Fantamulise non poteva mancare un po di sana competizione.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services

