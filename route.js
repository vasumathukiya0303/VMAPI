const express = require('express');
const employee = require('./Model/employee');
const Employee = require('./Model/employee');
const router = express.Router();

router.get("/employees",async (req,res)=>{

    const employee = await Employee.find();
    res.send(employee);
});

router.post("/employees",async (req,res)=>{

    try {
        const employee = new Employee({
            ename:req.body.ename,
            eage:req.body.eage,
            epost:req.body.epost,
            esalary:req.body.esalary
        });
        await employee.save();
        res.send(employee);
    } catch (error) {
       res.send(employee); 
    }
    
});
router.patch("/employees/:id",async(req,res)=>{
    try{
        const employee = await Employee.findOne({_id:req.params.id});
        employee.ename = req.body.ename;

        await employee.save();
        res.send(employee);

    } catch(error){
        res.send(error);
    }
});



router.delete("/employees/:id",async(req,res)=>{
    try{
    await Employee.deleteOne({_id:req.params.id});
    res.send("deleted"); 
    }
    catch{
        res.send(error);
    }
});
module.exports = router;