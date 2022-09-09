const { BadRequest } = require('http-errors')
<<<<<<< HEAD
const asyncHandler = require('../middleware/async')
const Courses = require('../models/courses')

const createCourse = asyncHandler( async (req,res,next) => {
=======
const Courses = require('../models/courses')

const createCourse = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        const {name,description,field} = req.body
        if(!name || !description || !field) throw new BadRequest('Please provide all info')

        const newCourse = await Courses.create(req.body)
        res.json({success:true,data:newCourse})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})

const getAllCourses = asyncHandler( async (req,res,next) => {
=======
}

const getAllCourses = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        const courses = await Courses.find()
        res.json({success:true,data:courses})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})

const getCourseById = asyncHandler( async (req,res,next) => {
=======
}

const getCourseById = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')

        const course = await Courses.findById(req.params.id)
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})

const getCourseByName = asyncHandler( async (req,res,next) => {
=======
}

const getCourseByName = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        if(!req.params.name) throw new BadRequest('Please provide a course name')

        const course = await Courses.find({name:req.params.name})
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})

const updateCourse = asyncHandler( async (req,res,next) => {
=======
}

const updateCourse = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')
        const course = await Courses.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})

const deleteCourse = asyncHandler( async (req,res,next) => {
=======
}

const deleteCourse = async (req,res,next) => {
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    try{
        if(!req.params.id) throw new BadRequest('Please provide a courseId')

        const course = await Courses.findByIdAndDelete(req.params.id)
        res.json({success:true,data:course})
    }catch(err){
        next(err)
    }
<<<<<<< HEAD
})
=======
}
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957

module.exports = {createCourse,getAllCourses,getCourseById,getCourseByName,updateCourse,deleteCourse}