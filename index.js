const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Config = require("./config/config");

const app = express();
const port = Config.PORT || 3000;

app.use(cors());
app.use(express.json());

let accessToken = "";

async function getTwitchAccessToken() {
  try {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token`,
      null,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          client_id: Config.TWITCH_CLIENT_ID,
          client_secret: Config.TWITCH_CLIENT_SECRET,
          grant_type: "client_credentials",
        },
      }
    );
    accessToken = response.data.access_token;

  } catch (error) {
    console.error("Error getting Twitch access token:", error);
  }
}

app.listen(port, async () => {
  await getTwitchAccessToken();
  console.log(`Server running on port ${port}`);
});
