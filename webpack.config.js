// webpack.config.js
import Dotenv from 'dotenv-webpack';

export default {
  // ... other webpack configurations
  plugins: [
    new Dotenv({
      path: './.env', // Specify the path to your .env file
    }),
  ],
};
