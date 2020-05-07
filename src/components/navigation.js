import React from "react"
import {Link} from "gatsby"

export default () => (
  <nav className="navigation"> 
    <a href="assets/kai-takahashi-resume-2020.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    <span className="interpunct">·</span>
    <a href="https://www.linkedin.com/in/kaideas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <span className="interpunct">·</span>
    <Link to="/email">Email</Link>
  </nav>
);