const { BadRequest } = require('http-errors')
const Courses = require('../models/courses')

const createCourse = async (req,res,next) => {
    try{
        const {name,description,field} = req.body
        if(!name || !description || !field) throw new BadRequest('Please provide all info')

        const newCourse = await Courses.create(req.body)
        res.json({success:true,data:newCourse})
    }catch(err){
        next(err)
    }
}

const getAllCourses = async (req,res,next) => {
    try{
        const courses = await Courses.find()
        res.json({success:true,data:courses})
    }catch(err){
        next(err)
    }
}

const getCourseById = async (req,res,next) => {
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')

        const course = await Courses.findById(req.params.id)
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
}

const getCourseByName = async (req,res,next) => {
    try{
        if(!req.params.name) throw new BadRequest('Please provide a course name')

        const course = await Courses.find({name:req.params.name})
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
}

const updateCourse = async (req,res,next) => {
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')
        const course = await Courses.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
}

const deleteCourse = async (req,res,next) => {
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')

        const course = await Courses.findByIdAndDelete(req.params.id)
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
}

module.exports = {createCourse,getAllCourses,getCourseById,getCourseByName,updateCourse,deleteCourse}