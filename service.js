const express = require('express')
const app = express();
const bodyParser =require('body-parser')

const cors = require('cors');
const client = require('./db');
const userRouter = require('./src/users/routes');

const PORT = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
app.use(cors());

app.get('/',async(req,res)=>{
    const data = {message:"Hello From Backend"}
    res.json(data)
});

app.use('/api/users',userRouter)

app.listen(PORT,async()=>{
    try{
        console.log(`Server is running successfully ${PORT}`);
        await client.connect();
        console.log(`database connected successful`);
    }
    catch(e){
        console.log(e.message);
    }
})