const express = require("express");
const router = express.Router();
const { Post, createRandomPost } = require("../faker-generator");

/* 
  GET random Posts like search in DB
  You can easly connect your DB an serving data using a query
*/
router.get("/", (req, res, next) => {
	const data = createRandomPost(25);
	res.json(data);
});
/*
  GET random posts
*/
router.get("/post", (req, res, next) => {
	const post = createRandomPost();
	res.json(post);
});
/*
  GET random posts much as query in Paramater
*/
router.get("/:count", (req, res, next) => {
	const count = req.params.count;
	const data = createRandomPost(count);
	res.json(data);
});
/*
  Post Post
*/
router.post("/", (req, res, next) => {
	const { title, post, date, author } = req.body;
	const newPost = new Post(title, post, date, author);
	res.status(200).json(newPost.create());
});

module.exports = router;
