import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5", margin: "auto"}}>
      <img src="/assets/404.jpg" style={{ maxWidth: "240px", margin: "0rem auto 1rem auto"}}></img>
      <h2>Something must have been typed wrong...</h2>
        <h2><Link to="/">Go home</Link></h2>


      </div>
    </Layout>
  )
}

export default notFound