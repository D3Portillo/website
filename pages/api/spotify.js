const { SPOTIFY_TOKEN } = process.env
const PLAYLIST = "1msBg36rOAk4p4zmOoepAW"
const SpotifyWebApi = require("spotify-web-api-node")
const api = new SpotifyWebApi({
  clientId: "09b29b9c7a6c4b1ca457a24fcf05769f",
  clientSecret: SPOTIFY_TOKEN,
  redirectUri: "https://d3portillo.me",
})
const { floor, random } = Math
module.exports = (_, res) => {
  const sendVoidData = () => res.json({})
  if (SPOTIFY_TOKEN) {
    function handleData({ body }) {
      api.setAccessToken(body["access_token"])
      api.getPlaylistTracks(PLAYLIST).then(({ body }) => {
        // get a random element index
        const itemIndex = floor(random() * body.items.length)
        const { track } = body.items[itemIndex]
        const response = {
          name: track.name,
          artists: track.artists.map(({ name }) => name).join(", "),
          cover: track.album.images[0].url,
          spotify: track.external_urls.spotify,
          preview: track.preview_url,
        }
        res.json(response)
      }, sendVoidData)
    }
    api.clientCredentialsGrant().then(handleData, sendVoidData)
  } else sendVoidData()
}
