const express = require('express')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, ()=> {
  console.log(`successfully started the server on PORT: ${ServerConfig.PORT}`);

});