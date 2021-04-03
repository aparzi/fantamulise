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
    <SEO title={"Home"} />
    <Services />
    <Competition />
    <About />
    <Team />
    <Helmet>
      <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" type="text/javascript" />
    </Helmet>
  </Layout>
)

export default IndexPage
