import React, { PropTypes } from 'react'
import './RgTreeView.scss'


const RgTreeView = React.createClass({
  propTypes: {
    itemFactory: PropTypes.func,
    treeData: PropTypes.object
  },
  getDefaultProps() {
    // 默认的item生成方法
    let defaultItemFactory = (data) => {
        return (
          <span>{data.name}</span>
        )
    }

    return {
      itemFactory: defaultItemFactory
    }
  },
  render () {
    let props = this.props

    function renderTree(data) {
      // 没有子数组
      if (!Array.isArray(data.list)) {
        return props.itemFactory(data)
      }

      // 有子数组
      let nameElm = <div>{data.name}</div>
      let itemListElm = data.list.map((item) => {
        return <li key={item.name}>{renderTree(item)}</li>
      })

      return (
        <div className="rg-tree-view">
          {data.name && nameElm}
          <ul className="rg-tree-view__list">
            {itemListElm}
          </ul>
        </div>
      )
    }

    return renderTree(props.treeData)
  }
})

export default RgTreeView
