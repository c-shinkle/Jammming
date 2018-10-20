import React, { Component } from 'react';

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>
            {this.props.track.songTitle}
          </h3>
          <p>
            {this.props.track.artist + ' | ' + this.props.track.album}
          </p>
        </div>
        <a className="Track-action">+</a>
      </div>
    );
  };
}

export default Track;