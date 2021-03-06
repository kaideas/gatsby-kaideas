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

        <a href="https://kaitakahashi.com/assets/kai-takahashi-resume-2020.pdf" rel="noopener noreferrer" className="about-link">Resume</a>
        <span className="interpunct about-link">·</span>
        <a href="https://www.linkedin.com/in/kaideas" target="_blank" rel="noopener noreferrer" className="about-link">LinkedIn</a>
        <span className="interpunct about-link">·</span>
        <a href="mailto:kai.takahashi@gmail.com" className="about-link">Email</a>

        <div className="primary-content">
        <p>Hi, I'm Kai. I'm an end-to-end product designer who loves diving deep into problems and working cross-functionally to design tools to help people.</p>
        <img src="/assets/kai-avatar-full.png" alt="Kai"></img>
        </div>

          </div>

         <div className="post">
           <h4>Design experience</h4>
          <p>I've been a designer over 13 years. 
            I got my first break photoshopping people's heads on the wrong bodies in middle school in Connecticut. I designed logos and sold t-shirts out of my car in high school, and then did more of the same while studying graphic design at Yale. I flexed my sports design muscles while interning at <a target="_blank" rel="noopener noreferrer" href="https://brandiose.com">Brandiose</a> and <a target="_blank" rel="noopener noreferrer" href="https://smebranding.com">SME</a> , performed VR medical procedures at <a target="_blank" rel="noopener noreferrer" href="https://digitalsurgeons.com">Digital Surgeons</a> (just checking if you're reading closely, it's actually a forward-thinking digital agency), and I've worked the last 3 years as the first product designer at <a target="_blank" rel="noopener noreferrer" href="https://zume.com">Zume</a> (originally Zume Pizza) in San Francisco.</p>
          <p>At Zume, I helped grow the design team from 1 to over 20, had a hand in nearly every user interface in production, and even had a literal hand in several pizza photoshoots. I also organized all of our sports teams—The Fightin' Pizzas (softball), Molten Mouth FC (soccer), A Tribe Called Crust, and the Superfoods (multi-sport)—complete with game summaries sent to the whole company every week and custom team uniforms (and stickers!).</p>
          
          <h4>A few other things I'm proud to share</h4>
          <p>
          I recently won the <a target="_blank" rel="noopener noreferrer" href="https://howlowcanyourlogo.com">How Low Can Your Logo</a> contest, as judged by Michael Bierut, Jessica Hische, and Armin Vit.
          </p>

          <p>
          I created <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@kaideas/punctumotion-99ae7858eed">Punctumotion</a>, a motion-based typographic system to express emotion in messages<span class="updown punctumotion">.</span>
          </p>

          <p>
          I led Berkeley College to our first Yale-wide intramural sports championship in 56 years, improving from 10th/12 to 1st in my four years.
          </p>        
        </div>

        </div>
          <div className="post-grid equal-imgs">
          <img src="/assets/molten-mouth.jpg" alt="Molten Mouth soccer team photo"></img>

          <img src="/assets/fightin-pizzas.jpg" alt="Fightin' Pizzas softballt eam photo"></img>
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