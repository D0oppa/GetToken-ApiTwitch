require("dotenv").config();

const Config = {
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
  TWITCH_BROADCASTER_ID: process.env.TWITCH_BROADCASTER_ID,
  PORT: process.env.PORT
};

module.exports = Config;
