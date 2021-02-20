const express = require('express');
const College = require('./model/collegeModel')
const Student = require('./model/studentmodel')
const parser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const collegeData = require('./data/college_data.json')
const studentData = require('./data/student_data.json')
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin": "*")
// })

// app.use(parser);
mongoose.connect('mongodb+srv://swapnil:abc@cluster0.ma46p.mongodb.net/db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('connected to db') })
//
app.get('/', (req, res) => {
    res.send('We are home');
})

async function seedServer() {
    for (const currentStudent of studentData) {
        const student = new Student({
            id: currentStudent.id,
            name: currentStudent.Name,
            batch: currentStudent.Batch,
        })
        try {
            const result = await student.save();
        } catch (err) {
            console.log(err)
        }
    }
}

//populate the server with the initial data using the json file
app.post('/seed', async (req, res) => {

    seedServer();
    res.json({ message: "server seeded successfully" })
})

app.get('/getCollegeByName/:name', async (req, res) => {
    try {
        const result = await College.find({ name: req.params.name }).exec();
        res.json(result)
    } catch (err) {
        res.json({ message: "not found" });
    }

})

app.get('/getCollegeById/:id', async (req, res) => {
    try {
        const result = await College.find({ id: req.params.id }).exec();
        res.json(result)
    } catch (err) {
        res.json({ message: "not found" });
    }

})

app.get('/getCollege', async (req, res) => {
    try {
        const result = await College.find().exec();
        res.json(result)
    } catch (err) {
        res.json({ message: "not found" });
    }

})
app.get('/getStudent', async (req, res) => {
    try {
        const result = await Student.find().exec();
        res.json(result)
    } catch (err) {
        res.json({ message: "not found" });
    }

})




app.delete('/delete/:id', async (req, res) => {

    try {
        const result = await College.remove({ _id: req.params.id })
        res.json(result);
    } catch (err) {
        res.json({ message: "nope" });
    }
})




app.listen(5000);