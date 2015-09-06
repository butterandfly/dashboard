import './RgNav.scss'

import React from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

const RgNav = React.createClass({
  render() {
    let iconCn = classNames('fa', 'fa-gear')
    return (
      <nav className="navbar navbar-default navbar-fixed-top rg-nav">
        <div className="rg-nav__container">
          <div>
            <Link to="/">
              <span className="rg-nav__header">RG Dashboard</span>
            </Link>
          </div>

          <ul className="rg-nav__buttons">
            <li><a href="#">
              <i className={iconCn}></i>
            </a></li>
          </ul>
        </div>
      </nav>
    )
  }
})

export default RgNav
