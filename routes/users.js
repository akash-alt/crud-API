import express from "express";
// import res from "express/lib/response";

import { createUser, getUsers,getUser,deleteUser } from "../controllers/users.js";
const router = express.Router();




router.get("/",getUsers)
router.post("/",createUser)

router.get("/:id",getUser)

router.delete("/:id",deleteUser)
// router.patch("/:id",(req,res)=>{
//     const {id} = req.params
//     const {firstName,lastName,age} = req.body;

//     const user = users.find((user)=> user.id === id)
//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;

//     res.send(`user with id ${id} deleted with database`)

// })

export default router;