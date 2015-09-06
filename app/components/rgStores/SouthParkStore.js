import Reflux from 'reflux'
import request from 'superagent'

// let tableData = [
//   {name: 'Eric', words: 'Screw you guys, I am going home.'},
//   {name: 'Stan', words: 'Oh my god, they kill kenny!'},
//   {name: 'Kyle', words: 'You baster!'},
//   {name: 'Kenny', words: '#$%@!'}
// ]

// let tableData2 = [
//   {name: 'Eric', words: 'Screw you guys, I am going home.'},
//   {name: 'Stan', words: 'Oh my god, they kill kenny!'},
//   {name: 'Kyle', words: 'You baster!'}
// ]

export const SouthParkActions = Reflux.createActions([
  'updateTableData'
])

export const SouthParkStore = Reflux.createStore({
  listenables: [SouthParkActions],

  data: {tableData: []},

  init() {
    request('/src/tableData.json', (err, res) => {
      this.data.tableData = res.body
      this.trigger(this.data)
    })
  },

  onUpdateTableData() {
    window.console.log('on update table data')
    // tableData[3].words = Math.random() * 100 + '!'
    // this.trigger({tableData: tableData2})
  },

  getInitialState() {
    return this.data
  }
})
