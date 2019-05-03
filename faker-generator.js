const faker = require("faker");

class User {
	constructor(
		image = faker.image.avatar(),
		firstName = faker.name.firstName(),
		lastName = faker.name.lastName(),
		mail = faker.internet.email(),
		phoneNumber = faker.phone.phoneNumber(),
		job = faker.name.jobTitle()
	) {
		this.image = image;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mail = mail;
		this.phoneNumber = phoneNumber;
		this.job = job;
	}

	create() {
		return {
			image: this.image,
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
	createRandomUser: function(count = 1) {
		let Users = [];
		for (let i = 0; i < count; i++) {
			let user = new User();
			Users.push(user.create());
		}
		return Users;
	},
	createRandomPost: function(count = 1) {
		let Posts = [];
		for (let i = 0; i < count; i++) {
			let post = new Post();
			Posts.push(post.create());
		}
		return Posts;
	}
};
