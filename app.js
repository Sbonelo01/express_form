const {
    addNewVisitor,
    viewOneVisitor
} = require('./database')

const express = require('express');
const app = express();
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

app.post('/new_visitor', (req, res) => {
    let name = req.body.visitorName;
    let assistant = req.body.assistant;
    let age = req.body.visitorAge;
    let date = req.body.dateOfVisit;
    let comments = req.body.comments;

    const newVisitor = addNewVisitor(name, assistant, age, date, time, comments);
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
    })
})

app.listen(3000)
console.log('listening on port 3000')
