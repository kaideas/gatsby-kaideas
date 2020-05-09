import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
// import HeroHeader from "../components/heroHeader"


const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About" + site.siteMetadata.description} />
      </Helmet>

      <div className="content-wrapper">
      <div className="hero-header">
        <h1 className="headline">About me </h1>
        <div className="primary-content">
          <p>Hi, I'm Kai. I'm an end-to-end product designer who loves diving deep into problems and working cross-functionally to help people with design.</p>
          </div>

         <div className="post">
          <p>I've been a designer over 13 years. 
            I got my first break photoshopping people's heads on the wrong bodies in middle school in Connecticut. I designed logos and sold t-shirts out of my car in high school, and then did more of the same while studying graphic design at Yale. I flexed my sports design muscles while interning at Brandiose and SME, performed VR medical procedures at Digital Surgeons (just checking if you're reading closely, it's actually a forward-thinking digital agency), and I've worked the last 3 years as the first product designer at Zume (originally Zume Pizza) in San Francisco.</p>
          <p>At Zume, I helped grow the design team from 1 to over 20, had a hand in nearly every user interface in production, and even had a literal hand in several pizza photoshoots. I also organized all of our sports teams—The Fightin' Pizzas (softball), Molten Mouth FC (soccer), A Tribe Called Crust, and the Superfoods (multi-sport)—complete with game summaries sent to the whole company every week and custom team uniforms (and stickers!).</p>
          
          <h4>A few other things I'm proud to share</h4>
          <p>
          I recently won the <a target="_blank" href="https://howlowcanyourlogo.com">How Low Can Your Logo</a> contest, as judged by Michael Bierut, Jessica Hische, and Armin Vit.
          </p>

          <p>
          I created <a target="_blank" href="https://medium.com/@kaideas/punctumotion-99ae7858eed">Punctumotion</a>, a motion-based typographic system to express emotion in messages<span class="updown punctumotion">.</span>
          </p>

          <p>
          I led Berkeley College to our first Yale-wide intramural sports championship in 56 years, improving from 10th/12 to 1st in my four years.
          </p>
          </div>
          
         
      </div>
      </div>
      
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`