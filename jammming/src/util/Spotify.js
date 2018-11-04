const client_id = '04d795ec88be4bb1a4501a58207c6d87';
const redirect_uri = 'http://localhost:3000/';
const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;

let cached_token = '';

const Spotify = {
  getAccessToken() {
    //if we already have a token, return it
    if (cached_token) {
      return cached_token;
    }
    //if we don't have a token, check if we can get a token from #
    const access_token = window.location.href.match(/access_token=([^&]*)/);
    const expires_in = window.location.href.match(/expires_in=([^&]*)/);
    //if both the regexes are good, we have a new token
    if (access_token && expires_in) {
      cached_token = access_token[1];
      window.setTimeout(() => cached_token = '', parseInt(expires_in[1]) * 1000);
      window.history.pushState(cached_token, null, '/');
      return cached_token;
    }
    //otherwise, get a new token
    window.location.href = url;
  },
  async search(term) {
    const token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${token}`},
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      if (!jsonResponse.tracks.items)
        return;
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    });
  },
  async savePlaylist(playlistName, uris) {
    console.log('savePlaylist entered')
    if (!playlistName || !uris)
      return;
    let token = this.getAccessToken();
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    //Get user id
    let user_id = await fetch('https://api.spotify.com/v1/me', {
      headers: headers,
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      return jsonResponse.id;
    });
    //Create Playlist
    let playlist_id = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', 
      },
      method: 'POST',
      body: JSON.stringify({
        name: playlistName,
        public: true,
      }),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      if(jsonResponse) {
        return jsonResponse.id
      } else {
        return '';
      }
    });
    //Populate playlist if it was created successfully
    if (playlist_id) {
      return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        },
        method: 'POST',
        body: JSON.stringify({
          uris: uris,
        }),
      }).then(response => {
        return response.ok;
      });
    }
  }
}

export default Spotify;