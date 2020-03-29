import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {console.log(this.props.opacity - 0.1)}
       { this.props.opacity <= 0.2 ? null : <ColorBox opacity = {this.props.opacity - 0.1}/> }
        {/* your conditional code here! */}
      </div>
    )
  }

}

// const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)

