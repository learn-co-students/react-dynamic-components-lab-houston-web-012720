import React, { Component } from 'react'

export default class Comment extends Component {
  render (props) {
    return (
    <div className="comment"> 
      {this.props.commentText}
    </div> 
    )
  }
}