const express = require("express");
const router = express.Router();
const { User, createRandomUser } = require("../faker-generator");

/* 
  GET random Users like search in DB
  You can easly connect your DB an serving data using a query
*/
router.get("/", (req, res) => {
	const data = createRandomUser(25);
	res.json(data);
});
/*
  GET random user
*/
router.get("/user", (req, res) => {
	const user = createRandomUser();
	res.json(user);
});
/*
  GET random users much as query in Paramater
*/
router.get("/:count", (req, res) => {
	const count = req.params.count;
	const data = createRandomUser(count);
	res.json(data);
});
/*
  Post User
*/
router.post("/", (req, res) => {
	const { image, firstName, lastName, email, number } = req.body;
	const newUser = new User(image, firstName, lastName, email, number);
	res.status(200).json(newUser.create());
});

module.exports = router;
