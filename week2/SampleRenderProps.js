import React, { Component } from 'react'
import RenderPropsComponents from './RenderPropsComponents'

export default class SampleRenderProps extends Component {
  render() {
    return (
      <RenderPropsComponents
        render={()=>{
            return (
                <div>
                    <h2>This is from render props</h2>
                </div>
            );
        }}
      />
    );
  }
}
