import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Carousel } from 'react-responsive-carousel';


const Team = () => (
  <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Team</h2>
        <h3 className="section-subheading text-muted">Le squadre della nostra lega.</h3>
      </div>
      <Carousel autoPlay={true} infiniteLoop={true} emulateTouch={true}>
        <div className="team-member">
          <StaticImage src={'../images/team/dinhoTeam.png'} alt={'DinhoTeam'} style={{width: '250px', height: '250px'}}/>
          <h4>DinhoTeam</h4>
          <p className="text-muted">aparziale</p>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/astonBirra.png'} alt={'astonBirra'} style={{width: '250px', height: '250px'}}/>
            <h4>fc Aston birra</h4>
            <p className="text-muted">jz4mik</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/atleticoMaNonTroppo.png'} alt={'atleticoMaNonTroppo'} style={{width: '250px', height: '250px'}}/>
            <h4>Atleticomanontroppo FC</h4>
            <p className="text-muted">scamone73</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/calcioSamba.png'} alt={'calcioSamba'} style={{width: '250px', height: '250px'}}/>
            <h4>Calcio Samba</h4>
            <p className="text-muted">dada82dada82</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/cbForever.png'} alt={'cbForever'} style={{width: '250px', height: '250px'}}/>
            <h4>cb forever</h4>
            <p className="text-muted">Antonio</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/cskaLaRissa.png'} alt={'cskaLaRissa'} style={{width: '250px', height: '250px'}}/>
            <h4>CSKA La Rissa</h4>
            <p className="text-muted">FrancescoGuerriero</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/eva1432.png'} alt={'eva1432'} style={{width: '250px', height: '250px'}}/>
            <h4>Eva1432</h4>
            <p className="text-muted">Eva1432</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/mazzamaurielle.png'} alt={'mazzamaurielle'} style={{width: '250px', height: '250px'}}/>
            <h4>Mazzamaurielle</h4>
            <p className="text-muted">domenicomazzamaurielle</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/polesiana.png'} alt={'polesiana'} style={{width: '250px', height: '250px'}}/>
            <h4>Polesiana</h4>
            <p className="text-muted">libero80m</p>
          </div>
        </div>
        <div className='item'>
          <div className="team-member">
            <StaticImage src={'../images/team/teamChiappetto.png'} alt={'teamChiappetto'} style={{width: '250px', height: '250px'}}/>
            <h4>Team Chiappetto</h4>
            <p className="text-muted">Lommy85</p>
          </div>
        </div>
      </Carousel>
    </div>
  </section>
)

export default Team
