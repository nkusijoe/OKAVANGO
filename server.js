const express = require('express')
require('dotenv').config()
const session = require('express-session')
const redisStore = require('connect-redis')(session)
const redisClient = require('redis').createClient({legacyMode:true})

redisClient.connect().then().catch(err=>{console.error(err)})

const {connectToMongo} = require('./utils/connectToMongo')
const {SESSION_SECRET,NODE_ENV} = process.env


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(session({
    store: new redisStore({client:redisClient}),
    saveUninitialized:false,
    resave:false,
    secret:SESSION_SECRET,
    cookie:{httpOnly:true}
}))

app.use('/users',require('./routes/users'))
app.use('/courses',require('./routes/courses'))
app.use('/units',require('./routes/units'))

connectToMongo()

app.listen(port,()=>{
    if(NODE_ENV==='development'){
        console.log(`Okavango runnin, PORT: ${port}`)
    }else{
        console.log('Okavango is running')
    }  
})