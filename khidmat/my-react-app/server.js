import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wejitossj!@#', // Replace with the actual password you set during MySQL installation
  database: 'jdc_it_city'
});

console.log('Connected to MySQL Database');