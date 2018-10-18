const express = require('express')
const router = express.Router()
const fakerGenerator = require('../faker-generator')

/* 
  GET random Posts like search in DB
  You can easly connect your DB an serving data using a query
*/
router.get('/', (req, res, next) => {
  const data = fakerGenerator.createRandomPost(25)
  res.json(data);
});

/*
  GET random posts much as query in Paramater
*/
router.get('/:count', (req, res, next) => {
  const count = req.params.count;
  const data = fakerGenerator.createRandomPost(count);
  res.json(data);
});
/*
  GET random posts
*/
router.get('/post', (req, res, next) => {
  const post = fakerGenerator.createRandomPost();
  res.json(post);
});

/*
  Post Post
*/
router.post('/', (req, res, next) => {
  const title = req.body.title;
  const post = req.body.post;
  const date = req.body.date;
  const author = req.body.author;
  
  const createdPost = {
    "title": title,
    "post": post,
    "date": date,
    "author": author
  }

  res.status(200).json(createdPost);
})

module.exports = router
