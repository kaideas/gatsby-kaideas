import React from "react"
import { Link } from "gatsby";
import Navigation from "../components/navigation";
import Icon from "../components/icon";
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const date = new Date();

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">
            <Icon />
          </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {date.getFullYear()} Kai Takahashi</p>
      </footer>
    </div>
  )
}