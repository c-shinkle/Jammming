import React, { Component } from 'react';
//import Track from '../Track/Track';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
          name: 'Sound of Madness',
          artist: 'Shinedown',
          album: 'Sound of Madness',
        }, {
          name: 'Enter Sandman',
          artist: 'Metallica',
          album: 'Metallica',
        }, {
          name: 'A Warrior\'s Call',
          artist: 'Volbeat',
          album: 'Beyond Hell/Above Heaven',
        },
      ],
      playlistTracks: [{
          name: 'Second Chance',
          artist: 'Shinedown',
          album: 'Sound of Madness',
        }, {
          name: 'Feel Invincible',
          artist: 'Skillet',
          album: 'Unleashed',
        },
      ],
      playlistName: '',
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    let foundTrack = this.state.playlistTracks.find(element => {
      return element.id === track.id;
    });
    if (!foundTrack) {
      let temp = this.state.playlistTracks.split();
      temp.push(track);
      this.setState({playlistTracks: temp});
    }
  }

  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks.filter(element => {
      return track.id !== element.id;
    });
    this.setState({playlistTracks: newPlaylist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackURIs = this.playlistTracks.map(track => {
      return 'spotify:track:' + track.id;
    });

  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist tracks={this.state.playlistTracks} 
              onRemove={this.removeTrack} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
