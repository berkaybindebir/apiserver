// Faker.js
const faker = require("faker");

class User {
	constructor(
		firstName = faker.name.firstName(),
		lastName = faker.name.lastName(),
		mail = faker.internet.email(),
		phoneNumber = faker.phone.phoneNumber(),
		job = faker.name.jobTitle()
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.mail = mail;
		this.phoneNumber = phoneNumber;
		this.job = job;
	}

	create() {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			fullName: `${this.firstName} ${this.lastName}`,
			mail: this.mail,
			phoneNumber: this.phoneNumber,
			job: this.job
		};
	}
}

class Post {
	constructor(
		title = faker.lorem.sentence(),
		post = faker.lorem.paragraphs(),
		date = faker.date.past(),
		author = faker.internet.userName()
	) {
		this.title = title;
		this.post = post;
		this.date = date;
		this.author = author;
	}

	create() {
		return {
			title: this.title,
			post: this.post,
			date: this.date,
			author: this.author
		};
	}
}

module.exports = {
	User,
	Post,
	createRandomUser: count => {
		console.log(count);
		let userCount = count != undefined && count != null ? count : 1;
		let Users = [];
		for (let i = 0; i <= userCount; i++) {
			let user = new User();
			Users.push(user);
		}
		return Users;
	},
	createRandomPost: count => {
		const postCount = count != undefined && count != null ? count : 1;
		const Posts = [];
		for (let i = 1; i <= postCount; i++) {
			let post = new Post();
			Posts.push(post);
		}
		return Posts;
	}
};
