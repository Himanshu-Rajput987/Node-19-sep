const Student = require('../models/Student');

async function addStudent(req, res){
    try{
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log("data saved successfully");
        res.end("data added...");
    }catch(err){
        console.log(err);
    }
}
async function getStudents(req,res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.send(students);  // when we send a variable then use res.send else if(send message) user res.end
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent,
    getStudents
}

