"use strict"

require('dotenv').config();

const {
    Client
} = require('pg');

//let user = process.env.PGUSER;
//let password = process.env.PGPASSWORD;
//let host = process.env.PGHOST;
//let port = process.env.PGPORT;
//let database = process.env.PGDATABASE;

const client = new Client({
    user: 'user',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    database: 'db'
});

async function createTable() {
    try {
        await client.connect()
        const table = await client.query(
            `CREATE TABLE IF NOT EXISTS
        newVisitor(
          id SERIAL primary key,
          visitorName varchar(50),
          assistant varchar(50),
          visitorAge int,
          dateOfVisit varchar(50),
          timeOfVisit varchar(50),
          comments varchar(50)
        );`
        )
    } catch (err) {
        console.log(`here\'s the ${err}`)
    } finally {
        await client.end()
        console.log('SUCCESSFULL DISCONNECTION')
    }
}

//createTable();

const addNewVisitor = async(visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments) => {
    try {
        const query = await client.query(
            `INSERT INTO newVisitor
                (visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [visitorName, assistant, visitorAge, dateOfVisit, timeOfVisit, comments]
        )
        return query.rows[0].id;
    } catch (err) {
        console.log(`here\'s the ${err}`)
    }

}

//addNewVisitor();

const viewOneVisitor = async id => {

    const sql = 'SELECT * FROM newVisitors WHERE id = $1';
    const data = [id];

    const results = await client.query(sql, data);

    // Results
    console.log(results.rows)
}


//deleteVisitor:id

const deleteVisitor = async(id) => {
    try {
        const sql = `DELETE * FROM newVisitors WHERE id = $1`;
        const data = [id];
        const results = await client.query(sql, data);
        console.log(results.rows)
    } catch (err) {
        console.log(`${err}`)
    }
}

//deleteAllVisitors

const deleteAllVisitors = async() => {
    try {
        const sql = `DELETE * FROM newVisitors WHERE id = true`;
        const results = await client.query(sql);
        console.log(results.rows)
    } catch (err) {
        console.log(`${err}`)
    }
}

//viewVisitors

const viewVisitors = async() => {
    try {
        const sql = `SELECT * FROM newVisitors`;
        const results = await client.query(sql)
        console.log(results.rows)
    } catch (err) {
        console.log(`${err}`)
    }
}

//viewVisitor:id

const viewVisitor = async(id) => {
    try {
        const sql = `SELECT * FROM newVisitors WHERE id = TRUE`;
        const data = [id];
        const results = await client.query(sql, data);
        console.log(results.rows)
    } catch (err) {
        console.log(`${err}`)
    }
}

//updateVisitor:id

const updateVisitor = async(id) => {
    try {
        const sql = `SELECT * FROM newVisitors WHERE id = $1 AND UPDATE`;
        const data = [id];
        const results = await client.query(sql, data)
    } catch (err) {
        console.log(`${err}`)
    }
}

module.exports = {
    addNewVisitor,
    viewOneVisitor

    //new functions
    
    //addNewVisitor,
    //deleteVisitor,
    //deleteAllVisitors,
    //viewVisitors,
    //viewVisitor,
    //updateVisitor
};
