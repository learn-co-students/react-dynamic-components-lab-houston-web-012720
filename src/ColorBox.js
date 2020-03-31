import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {console.log(this.props.opacity)}
        {/* your conditional code here! */}
        {
          this.props.opacity >= 0.2
          ? <ColorBox opacity={parseFloat((this.props.opacity - 0.1).toFixed(1))} />
          // ? <ColorBox opacity={this.props.opacity - 0.1} />
          : null
        }
      </div>
    )
  }

}

