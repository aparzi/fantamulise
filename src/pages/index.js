import * as React from "react"

import Layout from "../components/layout"
import Services from "../components/services"
import Competition from "../components/competition"
import About from "../components/about"
import Team from "../components/team"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title={'Home'}/>
    <Services/>
    <Competition/>
    <About/>
    <Team/>
    {/*<h1>Hi people</h1>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<StaticImage*/}
    {/*  src="../images/gatsby-astronaut.png"*/}
    {/*  width={300}*/}
    {/*  quality={95}*/}
    {/*  formats={["AUTO", "WEBP", "AVIF"]}*/}
    {/*  alt="A Gatsby astronaut"*/}
    {/*  style={{ marginBottom: `1.45rem` }}*/}
    {/*/>*/}
    {/*<p>*/}
    {/*  <Link to="/page-2/">Go to page 2</Link> <br />*/}
    {/*  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    {/*</p>*/}
      <Helmet>
          <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" type="text/javascript" />
      </Helmet>
  </Layout>
)

export default IndexPage
