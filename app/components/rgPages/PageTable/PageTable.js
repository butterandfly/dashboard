import 'fixed-data-table/dist/fixed-data-table.css'

import React from 'react'
import {Table, Column} from 'fixed-data-table'
import Reflux from 'reflux'
import {SouthParkActions, SouthParkStore} from 'rgStores/SouthParkStore.js'

const PageTable = React.createClass({
  mixins: [Reflux.connect(SouthParkStore)],
  render () {
    // var rows = [
    //   ['中国大陆', '51.14', '22.52', '4.89', '3.34', '18.1']
    // ]

    let tableData = this.state.tableData

    function rowGetter(key) {
      return tableData[key]
    }
    return (
      <div>
        <h1 onClick={SouthParkActions.updateTableData}>Page Table</h1>
        <Table
          rowHeight={50}
          rowGetter={rowGetter}
          rowsCount={tableData.length}
          width={600}
          height={200}
          headerHeight={50}>
          <Column
            label="人物"
            width={300}
            dataKey="name"
            />
          <Column
            label="口头禅"
            width={300}
            dataKey="words"
            />
        </Table>
      </div>
    )
  }
})

export default PageTable
