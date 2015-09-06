// css

// data
import './data.js'

import React from 'react'
import Router, { Route, DefaultRoute } from 'react-router'
import App from './App/App.js'
import PageDashboard from 'rgPages/PageDashboard/PageDashboard.js'
import PageLogin from 'rgPages/PageLogin/PageLogin.js'
import PageChart from 'rgPages/PageChart/PageChart.js'
import PagePieChart from 'rgPages/PagePieChart/PagePieChart.js'
import PageTable from 'rgPages/PageTable/PageTable.js'

let Routes = (
  <Route handler={App} path="/" name="app">
    <DefaultRoute handler={PageDashboard}/>
    <Route name="dashboard" handler={PageDashboard}/>
    <Route name="chart" handler={PageChart}/>
    <Route name="piechart" handler={PagePieChart}/>
    <Route name="table" handler={PageTable}/>
    <Route name="login" handler={PageLogin}/>
  </Route>
)

let content = document.getElementById('content')

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content)
})
