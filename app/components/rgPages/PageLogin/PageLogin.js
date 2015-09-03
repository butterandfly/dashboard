import React from 'react'

const PageLogin = React.createClass({
  componentDidMount() {
    window.console.log('PageLogin did mount')
  },
  render () {
    return (
      <div>
        <h1>Page Login</h1>
      </div>
    )
  }
})

export default PageLogin
