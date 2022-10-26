const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-categories.json');
const courses = require('./data/course-intro.json');


app.get('/course-categories', (req, res) => {
    res.send(categories)
});


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const course_category = courses.filter(n => n.category === id);
        res.send(course_category);
    }
})


app.listen(port, () => { })