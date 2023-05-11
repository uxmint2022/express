const {Client } = require('pg');

const client = new Client({
    user:'postgres',
    database:'Users',
    host:'localhost',
    password:'mint2023',
    port:5432
})

module.exports = client;