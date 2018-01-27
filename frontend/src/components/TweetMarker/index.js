import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class TweetMarker extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log(this.props.id);
  }
  render() {
    return (
        <Marker
          id={this.props.id}
          position={this.props.coordinates}
          onClick={this.handleClick}
        />
    );
  }
}

export default TweetMarker;