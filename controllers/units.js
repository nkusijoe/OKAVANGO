const {BadRequest} = require('http-errors')
const Units = require('../models/units')
const { uploadmedia } = require('../utils/cloudinary')

const createUnit = async(req,res,next) =>{
    try{
        const {name,text,course} = req.body
        if(!name || !text || !course) throw new BadRequest('Please provide all info')
        const unit = {
            name:name,
            tutorial: (await uploadmedia(req.file)).url,
            test:text,
            course:course
        }
        const newUnit = await Units.create(unit)
        res.json({success:true,data:newUnit})
    }catch(err){
        next(err)
    }
}

module.exports = {createUnit}