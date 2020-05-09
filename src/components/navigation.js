import React from "react"
import {Link} from "gatsby"

export default () => (
  <nav className="navigation"> 
  <a href="/#work" rel="noopener noreferrer">Work</a>
   <span className="interpunct mobile-hide">·</span>
   <a href="/about" rel="noopener noreferrer">About</a>
   <span className="interpunct mobile-hide">·</span>
    <a className="mobile-hide" href="https://kaitakahashi.com/assets/kai-takahashi-resume-2020.pdf" 
    target="_blank" rel="noopener noreferrer">Resume</a>
    <span className="interpunct mobile-hide">·</span>
    <a className="mobile-hide" href="https://www.linkedin.com/in/kaideas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="mailto:kai.takahashi@gmail.com" className="button -primary margin-top-sm mobile-hide">Email</a>
  </nav>
);