const queries = require('./queries')
const client = require('../../db');

const getUsers =(req,res)=>{
   client.query(queries.getUsers,(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
   })
}

const getUsersById =(req,res)=>{
    const id = parseInt(req.params.id)
    client.query(queries.getUsersById,[id],(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows)
    })
}

const addUsers = (req,res)=>{
    const {name,email,age,dob} = req.body;
    // check if email exists
    client.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send('Email already exists')
        };
    // add user to database
    client.query(queries.addUsers,[name,email,age,dob],(error,results)=>{
        if(error) throw error;
        res.status(201).send("user added successfully")
    })     
    })
}

const removeUsers = (req,res)=>{
    const id = parseInt(req.params.id);
    client.query(queries.getUsersById,[id],(error,results)=>{
        const notStudentFound = !results.rows.length;
        if(notStudentFound){
            res.send("User doesn't exists in database")
        }

    client.query(queries.removeUser,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send('user removed successful')
    })    
    })
}

const updateUsers = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name,email,age,dob} =req.body;
     client.query(queries.getUsersById,[id],(error,results)=>{
        const notStudentFound = !results.rows.length;
        if(notStudentFound){
            res.send("User doesn't exists in database")
        }
    
     client.query(queries.updateUsers,[name,email,age,dob,id],(error,results)=>{
    // client.query(queries.updateUsers,[name,id],(error,results)=>{
        if(error) throw error;
        else if (res.status(200).send('user update successful'));
    })
    })
}

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
    updateUsers,
};