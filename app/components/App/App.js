import './App.scss'

import React from 'react'
import { RouteHandler } from 'react-router'
import Sidebar from 'react-sidebar'
import RgVerNav from 'rgCommons/RgVerNav/RgVerNav.js'
import RgNav from 'rgCommons/RgNav/RgNav.js'

const App = React.createClass({
  getInitialState() {
    return {sidebarOpen: true, sidebarDocked: true}
  },

  onSetSidebarOpen: function(open) {
    this.setState({sidebarOpen: open})
  },

  componentWillMount: function() {
    var mql = window.matchMedia(`(min-width: 800px)`)
    mql.addListener(this.mediaQueryChanged)
    this.setState({mql: mql, docked: mql.matches})
  },

  componentWillUnmount: function() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  },

  mediaQueryChanged: function() {
    this.setState({sidebarDocked: this.state.mql.matches})
  },
  render () {
    let sidebarContent = <RgVerNav />

    return (
      <Sidebar sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}>
        <div>
          <RgNav />
          <RouteHandler/>
        </div>
      </Sidebar>
    )
  }
})

export default App
