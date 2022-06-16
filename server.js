if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// Importing Modules
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()


const path = require('path')

// Setting CORS
const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],
    credentials: true
}
app.use(cors(corsOpts))

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"))



const appRouters = require('./src/routes/allRoutes')

app.get('/', async(req, res) =>{
    return res.render('index')
})

app.use('/', appRouters)


// Starting the Server
app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to PORT 5000.")
})