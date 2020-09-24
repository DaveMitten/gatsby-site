import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"


export default () => (
  <Layout>
    <Title text="About page"></Title>
    <div>
      <Link to="/">HOME</Link> |
      <Link to="/about">ABOUT</Link>
    </div>
    <p>this is a paragraph</p>
  </Layout>
)