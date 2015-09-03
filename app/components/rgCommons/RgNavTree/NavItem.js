import './NavItem.scss'

import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

const NavItem = React.createClass({
  propTypes: {
    icon: PropTypes.string,
    linkTo: PropTypes.string
  },
  getDefaultProps () {
    return {}
  },
  render () {
    let props = this.props

    let iconCn = classNames('fa', 'fa-' + props.icon, 'nav-item__icon')

    return (
      <Link to={props.linkTo} activeClassName="nav-item__link_current">
        <div className='nav-item__content'>
          <i className={iconCn}></i>
          <span>{props.children}</span>
        </div>
      </Link>
    )
  }
})

export default NavItem
