const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: String },
    name: { type: String },
    fathername: { type: String },
    adharCardNo: { type: String },
    mobileNo: { type: String }
})

module.exports = mongoose.model('Student', StudentSchema);