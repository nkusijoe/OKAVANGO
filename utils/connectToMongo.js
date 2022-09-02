const mongoose = require('mongoose')
const {DB_NAME,DB_USERNAME,DB_PASSWORD} = process.env

const connectToMongo = () =>{ mongoose.connect(`mongodb+srv://okavango:90909@okavango.rf0rxso.mongodb.net/?retryWrites=true&w=majority`).then((connection)=>{
    console.log('Connected to mongo')
}).catch((err)=>{
    console.error(err)
})}

module.exports = { connectToMongo }