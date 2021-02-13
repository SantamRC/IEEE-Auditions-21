const path = require('path');
const express = require('express');
const app = express();
const cors=require('cors');
const mongoose=require('mongoose');
const Router=express.Router();

let form=require('./model');
app.use(express.json())
app.use(cors())
//app.use('/form',Router);

const publicPath = path.join(__dirname,'client', 'build');
const port = process.env.PORT || 4000;
app.use(express.static(publicPath));

if(process.env.NODE_ENV=="Production"){
   app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,'index.html'))
   })
}

//const mongodb= process.env.MONGODB_URI || "mongodb://localhost/auditions"
const mongodb="mongodb+srv://santam:santam12345@cluster.q6ixt.mongodb.net/form?retryWrites=true&w=majority"
mongoose.connect(mongodb, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(() => {
   console.log('Database sucessfully connected!')
 },
   error => {
     console.log('Could not connect to database : ' + error)
   }
)

app.post('/submit',(req,res)=>{
   const myform=new form(req.body)
   myform.save().then(()=>{
      res.json('Form added')
   }).catch(err=>res.send(err))
})

app.listen(port, () => {
   console.log('Server is up on port: '+port);
});