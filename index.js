const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('server is running');
});

app.get('/courseData', (req, res) => {
  res.send(courses);
});

app.get('/course-category/:id', (req, res) => {
  const id = req.params.id;
  const category = courses.find((cc) => cc.id == id);
  res.send(category);
});

app.listen(port, () => {
  console.log(`server running on port, ${port}`);
});
