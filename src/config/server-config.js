const dotenv = require('dotenv');
//returns an object on that object call config function

dotenv.config();
//the moment we do that inside process global we have an env, all the env variables that we have mentioned are going to be loaded inside process.env object

module.exports = {
  PORT: process.env.PORT
}
//export this obejct , in every file where we require env we dont have to separetly import dotenv,