const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/sana4");
  if (!connection) {
    console.log("noo");
  } else {
    console.log("good");
  }
}
connect();

const studentschema = new mongoose.Schema({
  name: String,
  age: Number,
  ph: String,
  address: String,
});

let studentModel = mongoose.model("student", studentschema);

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
});

let CourseModel = mongoose.model("Course", courseSchema);

let newstudent = new studentModel({
  name: "nermeen",
  age: 20,
  phone: "010234556",
  address: "ismailia",
}).save();

let newnada = new studentModel({
  name: "nada",
  age: 20,
  phone: "010255556",
  address: "ismailia",
}).save();

let newcourse = new CourseModel({
  name: "html",
  description: "It stands for Hyper Text Markup language",
}).save();

let newcss = new CourseModel({
  name: "css",
  description: "Cascading Style Sheets",
}).save();

app.get("/student", async (req, res) => {
  let allStudent = await studentModel.find();
  res.status(200);
  console.log(allStudent.length);
  res.json(allStudent);
});

app.get("/course", async (req, res) => {
  let allCourse = await CourseModel.find();
  res.status(200);
  console.log(allCourse.length);
  res.json(allCourse);
});

app.get("/", (req, res) => {
  res.send("welcome to my server");
});

app.listen(3000, function () {
  console.log("server now is opend");
});
