const getUsers = 'SELECT * FROM users';
const getUsersById = 'SELECT * FROM users WHERE id = $1';
const checkEmailExists = 'SELECT e FROM users e WHERE e.email = $1';
const addUsers = `INSERT INTO users (name,email,age,dob) VALUES ($1,$2,$3,$4)`;
const removeUser = 'DELETE FROM users WHERE id = $1'
// const updateUsers = 'UPDATE users SET name =$1 WHERE id =$2'
const updateUsers = 'UPDATE users SET name=$1,email=$2,age=$3,dob=$4  WHERE id =$5'


module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
    addUsers,
    removeUser,
    updateUsers,
};