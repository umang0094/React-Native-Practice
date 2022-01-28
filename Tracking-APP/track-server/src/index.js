require('./modules/User') // always declare Top 
require('./modules/Track')

const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./Routes/authRoutes')
const trackRoutes = require('./Routes/trackRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./middleware/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)
const mongoUri = 'mongodb+srv://umang0094:umangpatel@cluster0.9sdic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri).then(() => {
    console.log("Connected to monogodb")
}).catch((err) => {
    console.log("errr is " , err)
})


// mongoose.connection.on('connected', () =>{
//     console.log("connected to mongoose instance")
// })
// mongoose.connection.on('error', (err) => {
//     console.log(err)
// })
app.get('/', requireAuth, (req,res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})