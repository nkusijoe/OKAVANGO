const mongoose = require('mongoose')
const {DB_NAME,DB_USERNAME,DB_PASSWORD} = process.env

const connectToMongo = () =>{ mongoose.connect(`mongodb://localhost:27017/okavango`).then((connection)=>{
    console.log('Connected to mongo')
}).catch((err)=>{
    console.error(err)
})}

module.exports = { connectToMongo }