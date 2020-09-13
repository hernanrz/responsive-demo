import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(255,255,255,0.0)`,
      marginBottom: `1.45rem`,
      padding: '1em',
    }}
  >
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
          <span className="sr-only">
            {siteTitle}
          </span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
