const Pool = requ ire("pg").Pool;
require('dotenv').config();
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  password: 'pass',
  database: 'db',
  port: 5432
});

const addNewVisitor = async(visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments) => {

    const sql = `
    INSERT 
    INTO newVisitor 
    (visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `;

    const data = [visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments];

    const results = await pool.query(sql, data);

    // Results
    console.log(results.rows)
}

const viewOneVisitor = async id => {

    const sql = 'SELECT * FROM newVisitors WHERE id = $1';
    const data = [id];

    const results = await pool.query(sql, data);

    // Results
    console.log(results.rows)
}

module.exports = {
    addNewVisitor,
    viewOneVisitor
};
