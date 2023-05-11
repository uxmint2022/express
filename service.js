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

app.get('/users',async(req,res)=>{
    let response = await client.query(`select * from users`)
    res.send(response.rows)
})

// app.post('/posts',async(req,res)=>{
//     const {name,email,age,dob}=req.body;
//     // const {user_details}=req.body;
//     // try{
//     //     await db.query(`INSERT INTO users(user_name,email,age,dob) VALUES (user_name,email,age,dob)`,[user_name,email,age,dob])
//     //     res.sendStatus(200)
//     // }
//     // catch(error){
//     //     console.error(error);
//     //     res.sendStatus(500)
//     // }
//     console.log('name : ',name,'email : ',email, 'age, : ',age,'dob : ',dob);
// })

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