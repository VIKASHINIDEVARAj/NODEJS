* 1: Introduction to Node.js
 * 2: Express.js and routing
 * 3: Middleware in Express
 * 4: REST API using Express
 * 5: MongoDB connection using Mongoose
 * 6: Schema and Model Creation
 * 7: Insert and retrieve Data
 * 8: Update and delete operations
 * 9: Validation and Error handling
 * 10: Express router
 * 11: Query and Filtering
 * 12: Pagination
 * 13: Authentication using JWT Password hashing using bcrypt
 * 14: Password hashing using bcrypt
 * 15: Mini Project - Student Management






npm init -y
npm install express mongoose mongodb jsonwebtoken bcrypt  


9.
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30
})


11.

db.students.find({ age: { $gt: 18 } })
4. Find students with marks greater than or equal to 75 
db.students.find({ marks: { $gte: 75 } })
5. Find students from CSE department 
db.students.find({ department: "CSE" })