
const {
    addNewVisitor,
    viewOneVisitor

    //from new functions 

    //deleteVisitor,
    //deleteAllVisistors,
    //viewVisitors,
    //viewVisitor,
    //updateVisitor
} = require('./database')

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

app.use('/', express.static(__dirname + '/'))
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/new_visitor', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/new_visitor', async (req, res) => {
    console.log(res);
    let name = req.body.visitorName;
    let assistant = req.body.assistant;
    let age = req.body.visitorAge;
    let date = req.body.dateOfVisit;
    let time = req.body.timeOfVisit;
    let comments = req.body.comments;
    const newVisitor = await addNewVisitor(name, assistant, age, date, time, comments);
    console.log(newVisitor)
    newVisitor.then(rows => {
        res.redirect(`/done/${rows[0].id}`);
    });

})

app.get('/done/:id', (req, res) => {
    const newVisitor = viewOneVisitor(req.params.id);

    newVisitor.then(rows => {
        res.render('done', {
            newVisitor: rows[0]
        });
    });
});

//from new functions

app.post('/', async(req, res) => {
    
});

app.delete('/', async(req, res) => {
    const delVisitor = deleteVisitor(req.id);
    delVisitor.then(rows => {
    
    })
});

app.delete('/', async(req, res) => {
    const deleteAll = deleteAllVisistors();
    deleteAll.then(rows => {

    })
});

app.get('/', async(req, res) => {

});

app.get('/', async(req, res) => {

});

app.put('/', async(req, res) => {

});

const server = app.listen(`${port}`)
console.log(`listening on port ${port}...`)



const server = app.listen(3000)
console.log('listening on port 3000')

module.exports = {
    server
}
