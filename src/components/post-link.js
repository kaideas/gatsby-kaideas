import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className="post-link">
  <article className="card">
    <Link to={post.frontmatter.path} className="post-image">
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      {/* <div className="post-meta">{post.frontmatter.date}</div> */}
      <div className="post-description">{post.frontmatter.metaDescription}</div>
      {/* <div class="tag">
				End-to-end design
			</div> */}
    </header>
  </article>
  </Link>
)
export default PostLink
