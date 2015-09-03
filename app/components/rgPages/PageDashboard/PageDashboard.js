import React from 'react'

const PageDashboard = React.createClass({
  componentDidMount() {
    window.console.log('PageDashboard did mount')
  },
  render () {
    return (
      <div>
        <h1>Page Dashboard</h1>
      </div>
    )
  }
})

export default PageDashboard
