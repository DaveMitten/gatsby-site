import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

//you pass data here, not query, the constant as you would expect. You enter the default name 'data' that graphQL returns from the fetch.
export default ({data}) => (
  <Layout>
    <Title text='welcome' />
    <div>
      <Link to="/">HOME</Link> |
      <Link to="/about">ABOUT</Link>
    </div>
    <p>this is a paragraph</p>
  </Layout>
)

//make sure you declare const not default. This is how to structure the graphql query for each page.

