const client_id = '04d795ec88be4bb1a4501a58207c6d87';
//const client_secret = '15cd56bbdc1c4eb09ee198a5dc38bce3';
const redirect_uri = 'http://localhost:3000/';
const url = `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

let token = '';
let timeDuration = 0;
let timeStamp = 0;

const Spotify = {
  getAccessToken() {
    if (token && Date.now() < timeStamp + timeDuration) {
      return token;
    }
    console.log(url);
    fetch (url, {
      'Access-Control-Allow-Origin': '*',
    }).then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    },(error) => {
      console.log(error);
    }).then(jsonRepsonse => {
      if (!jsonRepsonse)
        return;
      console.log(jsonRepsonse);
      //TODO
      //assign token, timeDuration, and timeStamp
    });
  }
}

export default Spotify;