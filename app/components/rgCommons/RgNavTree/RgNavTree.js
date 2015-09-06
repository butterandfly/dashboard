import React from 'react'
import RgTreeView from 'rgCommons/RgTreeView/RgTreeView.js'
import NavItem from './NavItem.js'
import './RgNavTree.scss'

const testData = {
  // name: 'navigation',
  list: [
    {name: 'Dashboard', linkTo: 'dashboard', icon: 'tachometer'},
    {name: 'Chart', linkTo: 'chart', icon: 'bar-chart'},
    {name: 'PieChart', linkTo: 'piechart', icon: 'pie-chart'},
    {name: 'Table', linkTo: 'table', icon: 'table'},
    {name: 'Login', linkTo: 'login', icon: 'power-off'}
    // {name: 'South Park', list: [
    //   {name: 'Eric'},
    //   {name: 'Kyle'}
    // ]}
  ]
}

const RgNavTree = React.createClass({
  render () {
    let itemFactory = (item) => {
      return <NavItem linkTo={item.linkTo} icon={item.icon}>{item.name}</NavItem>
    }

    return (
      <div className="rg-nav-tree">
        <RgTreeView itemFactory={itemFactory} treeData={testData} />
      </div>
    )
  }
})

export default RgNavTree
