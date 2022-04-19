// const SpotifyWebApi = require('spotify-web-api-node');
import SpotifyWebApi from 'spotify-web-api-node';
const spotifyControllerNew = (app) => {
  app.post('/api/login', login);
  app.post('/api/refresh', refresh);
}

const login = (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  spotifyApi
  .authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
  .catch(err => {
    res.sendStatus(400)
  })
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