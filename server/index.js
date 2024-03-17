// const express = require("express")
// const mongoose  = require('mongoose')
// const cors = require("cors")
// const EmployeeModel = require('./models/Employee')


// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employees");


// app.post("/login",async (req,res)=>{
//     const{name, email ,password} =req.body;
//     const login =  await EmployeeModel.create({
//         name:name,
//         email:email,
//         password:password
//     });
//     console.log(login);
//     try {
//         const user = await EmployeeModel.findOne({ email });
//         if (user) {
//             if (user.password === password) {
//                 // res.json("Success");
//                 res.json({ message: "Success", redirect: "/home" });
//             } else {
//                 res.status(401).json("Incorrect password");
//             }
//         } else {
//             res.status(404).json("User not found");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Internal Server Error");
//     }
//     // EmployeeModel.findOne({email:email})
//     // .then (user =>{
//     //     if(user){
//     //         if(user.password === password){
//     //             res.json("Success")
//     //         }
//     //         else{
//     //             res.json("the password is incorrect")
//     //         }
//     //     }
//     //     else{
//     //         res.json("No record Existed")
//     //     }
//     // })

// })
// app.post('/register',async(req,res)=>{
//     const{name, email ,password} =req.body;
//     const registerUser =  await EmployeeModel.create({
//         name:name,
//         email:email,
//         password:password
//     });
//     console.log(registerUser);    // .then(employees => res.json(employees))
//     // .catch(err=> res.json(err))
//     try {
//         const existingUser = await EmployeeModel.findOne({ email });
//         if (existingUser) {
//             // res.status(400).json("User already exists");
//             res.status(400).json({message :"User already exists" , redirect:"/login" });
//         } else {
//             const newUser = await EmployeeModel.create({ name, email, password });
//             res.status(201).json({ message: "User registered successfully", redirect: "/home", user: newUser });
//             // res.status(201).json(newUser);

//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Internal Server Error");
//     }
// })

// app.listen(3001, ()=>{
//     console.log("server is running ")
// }) 




const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employees", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EmployeeModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.status(401).json("Incorrect password");
            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await EmployeeModel.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists", redirect: "/login" });
        } else {
            const newUser = await EmployeeModel.create({ name, email, password });
            res.status(201).json({ message: "User registered successfully", redirect: "/home", user: newUser });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



// const express = require("express");
// const mongoose = require('mongoose');
// const cors = require("cors");
// const EmployeeModel = require('./models/Employee');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const uri = 'mongodb://localhost:27017/your_database_name';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         // Start the server after successful database connection
//         app.listen(3001, () => {
//             console.log("Server is running on port 3001");
//         });
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//         process.exit(1); // Exit the application if unable to connect to MongoDB
//     });

// app.post("/login", async (req, res) => {
//     const{name, email} =req.body;
//     const login =  await EmployeeModel.create({
//         name:name,
//         email:email,
//         password:password
//     });
//     console.log(login);
//     // const {email, password } = req.body;
//     try {
//         const user = await EmployeeModel.findOne({ email });
//         if (user) {
//             if (user.password === password) {
//                 // res.json({message: "Success" , redirect="/login" } );
//                 res.json({ message: "Success", redirect: "/home" });

//             } else {
//                 res.status(401).json("Incorrect password");
//             }
//         } else {
//             res.status(404).json("User not found");

//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Internal Server Error");
//     }
// });

// app.post('/register', async (req, res) => {
//     const{name, email } =req.body;
//     const registerUser =  await EmployeeModel.create({
//         email:email,
//         password:password
//     });
//     console.log(registerUser); 

//     try {
//         const existingUser = await EmployeeModel.findOne({ email });
//         if (existingUser) {
//             res.status(400).json({message :"User already exists" , redirect:"/login" });
//         } else {
//             const newUser = await EmployeeModel.create({ name, email, password });
//             // res.status(201).json(newUser);
//             res.status(201).json({ message: "User registered successfully", redirect: "/home", user: newUser });

//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Internal Server Error");
//     }

// });
