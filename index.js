const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-categories.json');
const news = require('./data/news.json');

app.get('/course-categories', (req, res) => {
    res.send(categories)
});


