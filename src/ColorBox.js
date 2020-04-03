import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  opacityReduce = () => {
    let opacity = this.props.opacity
    if (opacity > 0.2) {
      opacity = opacity - 0.1 
      return <ColorBox opacity={opacity}/>
    }
    
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {this.opacityReduce()}
      </div>
    )
  }

}

