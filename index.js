const express = require("express");
const cors = require("cors");
const pool = require("./db");
const upload = require("express-fileupload");
const path = require('path');
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined



const app = express();

app.use(express.json());
app.use(cors());
app.use(upload());


if(process.env.NODE_ENV === "production"){
    //server static content
    //npm run build
    //app.use(express.static(path.join(__dirname,"client/index.html")));
    app.use(express.static("./client/"));
}



app.get("/contactData", async (req,res)=>{
    try {
        const data = await pool.query("SELECT * FROM contact_us");
        res.json(data.rows);
    } catch (err) {
        console.error(err);
    }
});

app.get("/getApplications", async (req,res)=>{
    try {
        const data = await pool.query("SELECT * FROM applicant");
        res.json(data.rows);
    } catch (err) {
        console.error(err);
    }
});

app.post("/contactUs", async (req,res)=>{
    try {
        const { full_name, email, user_message } = req.body;
        const newMessage = await pool.query("INSERT INTO contact_us (full_name,email,user_message) VALUES ($1,$2,$3) RETURNING *",[full_name,email,user_message]);
        res.json(newMessage.rows);
    } catch (err) {
        console.error(err);
    }
});


app.post("/apply", async (req,res)=>{
    try {
        const { name, email, address, phone_number, experties, previous_jobs, joining_date, interview_date, current_salary, experience, resume } = req.body;
        //const { resume } = req.files;
        const application = await pool.query("INSERT INTO applicant (name, email, address, phone_number, experties, previous_jobs, joining_date, interview_date, current_salary, experience, resume) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",[name, email, address, phone_number, experties, previous_jobs, joining_date, interview_date, current_salary, experience, resume]);
        res.json(application.rows);
        //res.send("api working");
    } catch (err) {
        console.error(err);
    }
});

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"client/index.html"));
});

app.listen(PORT,()=>{
    console.log("server in running");
});