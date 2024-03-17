const mongoose = require ('mongoose')
const {Schema, model} = mongoose;

const EmployeeSchema = new Schema({
    name : String,
    email:String,
    password : String

})

const EmployeeModel = model("employee",EmployeeSchema)
module.exports = EmployeeModel