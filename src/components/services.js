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
          <span className="fa-stack fa-2x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" style={{"margin-right": "-3rem"}}/>
              <i className="fas fa-heartbeat fa-stack-1x fa-inverse font-size-3rem"/>
          </span>
          <h4 className="my-3">Passione</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
            architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-2x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" style={{"margin-right": "-3rem"}}/>
              <i className="fas fa-smile fa-stack-1x fa-inverse font-size-3rem"/>
          </span>
          <h4 className="my-3">Divertimento</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
            architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-2x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" style={{"margin-right": "-3rem"}}/>
              <i className="fas fa-trophy fa-stack-1x fa-inverse font-size-3rem"/>
          </span>
          <h4 className="my-3">Competizione</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
            architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services

