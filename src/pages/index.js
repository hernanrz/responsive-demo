import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ResponsiveSwitch from '../components/ResponsiveSwitch';

import Cuate from '../images/Programming-cuate.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="col-md-4">
      <img src={Cuate} alt="Ilustración de programación" />
    </div>

    <div className="col-md-8">
      <h1>¿Qué te ofrecemos?</h1>
      <p>
        Diseño web responsivo, es decir, ¡que se adapta a todo tipo de pantallas!
      </p>
      <p>Esta es una demostración de una página responsiva vs una página no responsiva</p>

      <ResponsiveSwitch />
    </div>
  </Layout>
)

export default IndexPage
