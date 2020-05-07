import React from "react"
import {Link} from "gatsby"

export default () => (
  <nav className="navigation"> 
    <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    <span class="interpunct">·</span>
    <a href="https://www.linkedin.com/in/kaideas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <span class="interpunct">·</span>
    <Link to="/email">Email</Link>
  </nav>
);