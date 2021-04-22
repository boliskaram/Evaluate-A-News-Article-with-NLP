const dotenv = require('dotenv')
dotenv.config()
const mockAPIResponse = require('./mockAPI.js')
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const { default: axios } = require('axios')
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static('dist'))



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


const BASE_API_URL ='https://api.meaningcloud.com/sentiment-2.1'

app.post('/add', async (req, res) =>{
    try{
        const url = req.body.url
        API_KEY = process.env.API_KEY
        const response =await axios.get(`${BASE_API_URL}?key=${API_KEY}&url=${url}&lang=en`)
        const data = await response.data;
        const result = {
            text : data.sentence_list[0].text,
            score_tag: data.score,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony
        }   
        console.log(result)
        res.send(result)
    }
    catch(error){
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// TODO: export app to use it in the unit testing