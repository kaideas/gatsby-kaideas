import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <h1 className="headline">{data.site.siteMetadata.home.title}</h1>
        <div 
          className="primary-content mobile-hide" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/about' className="button -primary margin-top-sm">More about me &rarr;</Link>
      </div>
    )}
  />
)