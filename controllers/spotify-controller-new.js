
import SpotifyWebApi from 'spotify-web-api-node';
import request from "request";
import fetch from 'node-fetch';
import axios from "axios";
import * as querystring from "querystring";

const spotifyControllerNew = (app) => {
  //app.post('/api/login', login);
  app.post('/api/refresh', refresh);
  app.get('/api/getToken/:code', function(req, res){
    const thiscode = req.params.code;
    const client_id =  "120d6eb199c6499998e0fe645309337b";
    const client_secret= "36901dcde12a499ca52941814552ca78";
    const headers = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    };

    let data = {
      grant_type: "client_credentials",
      code: thiscode,
      redirectUri: "http://localhost:8000/callback",
      client_id: client_id,
      client_secret: client_secret,
    };
    axios
    .post(
        "https://accounts.spotify.com/api/token",
        querystring.stringify(data),
        headers
    )
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  });
}

const refresh = (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
  .refreshAccessToken()
  .then(data => {
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
    })
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(400)
  })
}

export default spotifyControllerNew;