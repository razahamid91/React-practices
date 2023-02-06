import React, { Component } from 'react'

export default class RenderPropsComponents extends Component {
  render() {
    return (
      <div>
        <h1>This is a child component</h1>
        {this.props.render()}
      </div>
    )
  }
}
