const slugify = require("slugify");
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
// const geocoder = require('../utils/geocoder');
const Task = require('../models/Tasks.js');


//@desc get all tasks
//@route  GET /api/v1/tasks
//@access   Public 
exports.getTasks = asyncHandler(async (req,res,next) =>{
   const task = await Task.find();

   res.status(200).json({success:true, data: task});
});

//@desc single task
//@route  GET /api/v1/tasks
//@access   Public 
exports.getTask = asyncHandler(async(req,res,next) =>{
    const task = await  Task.findById(req.params.id);

    if(!task){
       return new ErrorResponse(`Task can not be found for id ${req.params.id}`,404)
    }

    res.status(200).json({success:true, data: task });
});
 

//@desc Create new task
//@route  GET /api/v1/task/:id
//@access  Public 
exports.createTask = asyncHandler( async (req,res,next) =>{

    const task = await Task.create(req.body);

    res.status(201).json({success:true, data:task});
});

//@desc Update task
//@route  PUT /api/v1/task/:id
//@access  Public 
exports.updateTask = asyncHandler(async(req,res,next) =>{
    
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });


      if(!task){
        return  new ErrorResponse(`Task not found with id ${req.params.id}`,404);
      }


    res.status(200).json({success:true, data:task});
});

//@desc Delete task
//@route   DELETE/api/v1/tasks/:id
//@access  Public 
exports.deleteTask = asyncHandler(async(req,res,next) =>{
    
    const task = await Task.findByIdAndDelete(req.params.id);
 
    if(!task){
        return  new ErrorResponse(`Task not found with id ${req.params.id}`,404);
      }

    res.status(200).json({success:true,data:{}});
});

