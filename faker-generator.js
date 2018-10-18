// Faker.js
const faker = require('faker')

module.exports = 
{
    createRandomUser : function(count){
    const userCount = (count != undefined && count != null) ? count : 1;
    const Users = [];
    for(let i = 0; i < userCount; i++){
        const getRandomFirstName = faker.name.firstName();
        const getRandomLastName = faker.name.lastName();
        const fullName = `${getRandomFirstName} ${getRandomLastName}`;
        const getRandomMail = faker.internet.email();
        const getRandomNumber = faker.phone.phoneNumber();
        const getRandomJob = 
        `
        ${faker.name.jobArea()}
        ${faker.name.jobTitle()}
        ${faker.name.jobDescriptor()} 
        `;
        
        const userObject = {
            "firstName": getRandomFirstName,
            "lastName": getRandomLastName,
            "fullName": fullName,
            "email": getRandomMail,
            "number": getRandomNumber,
            "job": getRandomJob
        };

        Users.push(userObject);
    }
        return Users

    },
    createRandomPost : function(count) {
        const postCount = (count != undefined && count != null) ? count : 1;
        const Posts = [];
        for(let i = 1; i <= postCount; i++){
            const getRandomTitle = faker.lorem.sentence();
            const getRandomPost = faker.lorem.paragraphs();
            const getRandomDate = faker.date.past();
            const getRandomAuthor = faker.internet.userName();

            const postObject = {
                "title": getRandomTitle,
                "post": getRandomPost,
                "date": getRandomDate,
                "author": getRandomAuthor
            };

            Posts.push(postObject)
        }

        return Posts
    }
}