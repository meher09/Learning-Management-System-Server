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



app.get('/courses', (req, res) => {
    res.send(courses)
});



app.get('/category/:slug', (req, res) => {
    const slug = req.params.slug;
    const course_category = courses.filter(course => course.category.slug === slug);
    res.send(course_category);

})


app.get('/course/:slug', (req, res) => {
    const slug = req.params.slug;
    const selectedCourse = courses.find(course => course.slug === slug);
    res.send(selectedCourse);
});

app.listen(port, () => { })