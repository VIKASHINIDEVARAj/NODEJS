const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("Connected");
    const schema = new mongoose.Schema({
        name: { type: String, required: true },
        email: {
            type: String,
            match: /.+@.+\..+/
        }
    });
    const Model = mongoose.model("Test", schema);
    const data = new Model({
        name: "",
        email: "sk@gmail.com"
    });
    try {
        await data.save();
    } catch (err) {
        console.log(err.message);
    }
    await mongoose.disconnect();
}
main().catch(console.error);

// show databases
// use testdb
// show collections
// db.users.insertOne({ 
//   name: "Alice", 
//   age: 28, 
//   status: "active" 
// })