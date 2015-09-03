import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import RgAvatarBox from 'rgCommons/RgAvatarBox/RgAvatarBox.js'
import RgNavTree from 'rgCommons/RgNavTree/RgNavTree.js'

import './RgVerNav.scss'

const RgVerNav = React.createClass({
  render () {
    return (
      <div className="rg-ver-nav">
        <RgAvatarBox />
        <Tabs>
          <TabList>
            <Tab><i className="fa fa-bars"></i></Tab>
            <Tab><i className="fa fa-pie-chart"></i></Tab>
            <Tab><i className="fa fa-bell"></i></Tab>
          </TabList>
          <TabPanel>
            <RgNavTree />
          </TabPanel>
          <TabPanel>
            <h2>Hello from Bar</h2>
          </TabPanel>
          <TabPanel>
            <h2>Hello from Baz</h2>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
})

export default RgVerNav
