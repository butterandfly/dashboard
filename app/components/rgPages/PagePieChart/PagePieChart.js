import React from 'react'
import {Radar, Pie, Doughnut} from 'react-chartjs'
import './PagePieChart.scss'

const PagePieChart = React.createClass({
  render () {
    let chartData = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }

    let pieData = [
      {
        value: 300,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'Red'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ]

    return (
      <div className="page-pie-chart">
        <h2>Radar Chart</h2>
        <div className="chart-container">
          <Radar data={chartData} />
        </div>
        <h2>Pie Chart</h2>
        <div className="chart-container">
          <Pie data={pieData} />
        </div>
        <h2>Doughnut  Chart</h2>
        <div className="chart-container">
          <Doughnut data={pieData} />
        </div>
      </div>
    )
  }
})

export default PagePieChart
