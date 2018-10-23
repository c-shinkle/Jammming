import React from 'react';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {

  render() {
    return (
      <div class="Playlist">
        <input defaultValue="New Playlist"/>
        <TrackList tracks={this.props.tracks}/>
        {/*eslint-disable-next-line*/}
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;