const router=require("express").Router();
const student = require("../models/student");
const Student=require("../models/student");

//get all students from db
router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    })
})
//find student by ID
router.route("/find/:id").get((req,res)=>{
    let studentId =  req.params.id;

    Student.findById(studentId).then((response)=>{
        res.json(response);
    }).catch((err)=>{
        console.log(err);
    })
})

//send student details to db
router.post("/add", (req,res)=>{

    const name=req.body.name;
    const birthday=req.body.birthday;
    const gender=req.body.gender;
    const address=req.body.address;
   
    const newStudent=new Student({
        name,
        birthday,
        gender,
        address
    }).save().then(()=>{
        res.json("Student Added");
    }).catch((err)=>{
        console.log(err);
    })
})

//update student details with an id
router.route("/update/:id").put((req,res)=>{
    let studentId=req.params.id;
    const {name,birthday,gender,address}=req.body;

    const updateStudent={
        name,
        birthday,
        gender,
        address
    }

    Student.findByIdAndUpdate(studentId,updateStudent)
    .then(()=>{
        res.json("Updated student!")
    }).catch((err)=>{
        console.log("Update unsuccessful",err);
    })
})

//delete student with an id
router.route("/delete/:id").delete((req,res)=>{
    let studentId=req.params.id;

    Student.findByIdAndDelete(studentId)
    .then(()=>{
        res.json("Student deleted!");
    }).catch((err)=>{
        console.log("Student deletion unsuccessful")
    })
})

module.exports=router;