import React, { Component } from 'react';


export default class Comment extends Component {

  render() {
    return (
      <di className="comment">
        {this.props.commentText}
      </di>
   
    )
  }

}



