const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname,'client', 'build');
const port = process.env.PORT || 4000;
app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

if(process.env.NODE_ENV=="production"){

}

app.listen(port, () => {
   console.log('Server is up on port: '+port);
});