const express = require('express')
const router = express.Router()
const fakerGenerator = require('../faker-generator')

/* 
  GET random Users like search in DB
  You can easly connect your DB an serving data using a query
*/
router.get('/', (req, res, next) => {
  const data = fakerGenerator.createRandomUser(25)
  res.json(data);
});

/*
  GET random users much as query in Paramater
*/
router.get('/:count', (req, res, next) => {
  const count = req.params.count;
  const data = fakerGenerator.createRandomUser(count);
  res.json(data);
});
/*
  GET random user
*/
router.get('/user', (req, res, next) => {
  const user = fakerGenerator.createRandomUser();
  res.json(user);
});

/*
  Post User
*/
router.post('/', (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const fullName = firstName+lastName;
  const email = req.body.email;
  const number = req.body.number;
  
  const createdUser = {
    "name": firstName,
    "lastname": lastName,
    "fullname": fullName,
    "email": email,
    "number": number
  }

  res.status(200).json(createdUser);
})

module.exports = router
