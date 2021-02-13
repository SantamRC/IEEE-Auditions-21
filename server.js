const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname,'client', 'build');
const port = process.env.PORT || 4000;
app.use(express.static(publicPath));

if(process.env.NODE_ENV=="Production"){
   app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,'index.html'))
   })
}

app.listen(port, () => {
   console.log('Server is up on port: '+port);
});