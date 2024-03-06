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

// sudo -u postgres psql
// sudo -u postgres psql

// # Create a new user
// CREATE USER myuser WITH PASSWORD 'mypassword';

// # Create a new database
// CREATE DATABASE mydatabase;

// # Grant privileges to the user on the database
// GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;

// # Exit psql
// \q
