const express = require('express')
const app = express()

app.use((req, res, next)=>{
  next();
})


app.get('/', (req, res) => {
  res.send('this is my new world of the node js and express js')
})

app.get('/api/todo', (req, res) => {
  res.send([1,2,3,4])
}) 

const { Pool } = require('pg');

const pool = new Pool({
  user: 'localhost',
  host: 'localhost',
  database: 'node_practice',
  password: 'password',
  port: 5432, // Default PostgreSQL port
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Current date from PostgreSQL:', res.rows[0].now);
  }
  pool.end(); // Close the pool
});


app.listen(2000, "localhost", () => {
  console.log("server is working on http://localhost:2000)");
});
