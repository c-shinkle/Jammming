import React, { Component } from 'react';
import './App.css';

import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';

class App extends Component {
  render() {
    const data = [{
        songTitle: 'Sound of Madness',
        artist: 'Shinedown',
        album: 'Sound of Madness',
      }, {
        songTitle: 'Enter Sandman',
        artist: 'Metallica',
        album: 'Metallica',
      }, {
        songTitle: 'A Warrior\'s Call',
        artist: 'Volbeat',
        album: 'Beyond Hell/Above Heaven',
      },
  ];
    return (
      <div className="App">
        <header className="App-header">
          <TrackList tracks={data}/>
        </header>
      </div>
    );
  }
}

export default App;
