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
        <img src="/assets/kai-avatar-full.png"></img>
        </div>

          </div>

         <div className="post">
           <h4>Design experience</h4>
          <p>I've been a designer over 13 years. 
            I got my first break photoshopping people's heads on the wrong bodies in middle school in Connecticut. I designed logos and sold t-shirts out of my car in high school, and then did more of the same while studying graphic design at Yale. I flexed my sports design muscles while interning at Brandiose and SME, performed VR medical procedures at Digital Surgeons (just checking if you're reading closely, it's actually a forward-thinking digital agency), and I've worked the last 3 years as the first product designer at Zume (originally Zume Pizza) in San Francisco.</p>
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
          <img src="https://lh3.googleusercontent.com/_tn6rH8wpRfdwE6KWtPnGZ-9lvVg9Vsc6tWLahcFE0Er--gvtZq6vC0753Iz-wyYO-BX-Cy8TmZsQOyvji6mMNdZMhELxR1CnVT_vb3DCQ_V4tkGIF1rnrGDJDqKKFIuooWVYJ-GvU4Hj-OMpmqO-7BMCMshrI79AY36KVa-d0xveVYxwLHMsbIIesSRbWAd8dvOPEeInQoD5gHSlcq23OuP1EOiDLiD-I1mHEq-xBFitP3paKlsQYLbD4_yIMM3PI1oV_m_YeECkiR9t-5Fmc-j7Vd6vZYGFKyHzBg6WgfhPVmVwlaBtaVTOmai9gVbMYyqN-WSIf9q2ctkYJXuWsa6hkeA9oiUqEUAyJWAJ6mwsQhcC9TD35PPI43SJ50sQZmSXeAD0E1ObsKTuYOvgUwWqIaEaHjy7bFQlDg0n1zxIW9K4AB_rxU0HTm8fuqF0rn9rpgiW3Hw-k3wSDjJeUMbnkmhyfMF4dB0cYnzgsnnxuCdSYiGnDtSBvZQYGobHo6yWZwIxAlaE1C_1OoJf8K2u5EisJjinSP1uW1a7RKMb0NY44005wE3NCKyc5rEdkyXvwhM55nA5NllMZ90r7QQe5s8aJR3pWbMuyRo7PIM4sz6lJ5MhtxMhe8qhy-LswahI8_dLmMxMKhJyK_WxTq7-ZMZR4aFcEDPIAqkCFaP7VyDn7CoXuPybSsGS08=w1439-h1043-no?authuser=0"></img>

          <img src="https://lh3.googleusercontent.com/8KQwibUxfT7Q7yhDH6Cia_QbhXxeYoVYC4gZ3j1H49bWBOpBzq6w9fho59kBNmw5fDZaaauuxQuTeATM0XgjUePXd10s2xpbjpSTwzTKwOs1WmCF9scr6bE_g8bNiwI8pKO0pkrGNTP72INsQxomXNYvHwfzf66VYf8eGpB61KjeeFVzSJRm1H6qXjDzy8KiDjtNWB605sVnDCRSuBElwx8suiE8jOp2eydtR-uqP4Cdjhzdv6og_oXk1qQQGP9-fNCr69GDKJyvSpvd3aiicnsYVlOclIL56DLLYsBwUwjMRBzYt9oDlhCEfHozrNEXv4GLy2eZza7DTJhVaOxWRSZZb-bvoGayHWPKdJbHXrPYWAaPGJzfIPudg0hmGCmYvTWT2AQ-gflgMRHJmbDNZ7H7f16UUkHp_MVbtVFZqNL7C3ZeYR-Pqf0xe4_3PvFfcGeVcveZDYd8iads53d627A4VBul6u8Xda9ksOkJGqVJFi1_xyI6mRzp4ZYWxjddf4tY0OYMS_Q0WAcBXNFcUZ69FJtkTSVZtICiZM9Sp_88XfDM2ZNxZStmLab7q76vlLqapXGuPz0F-0G7qYZpx6zIOXRfh2sHmbbV2VKD3Dpym49KIA5DyWr0cW4j7ix6L1ckdumjJkXKOlP2Ua9UBqbNRa7XQmlfiwcq5u0h25JgUyOcbaT44eY2PJZe5w=w2020-h1514-no?authuser=0"></img>
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