/* Require dotenv to separate secrets from the source code. */
const dotenv = require('dotenv')
dotenv.config()

/* Require path to provide useful functionality to access and interact with the file system */
const path = require('path')

/* Require express to run server and routes, body-parser, and cors. */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/* Enable the use of fetch functions inside Nodejs. */
const fetch = require('node-fetch')

/* Start-up an instance of app. */
const app = express()

/* Handel cors for cross origin allowanc. */
app.use(cors())

/* Handle body parsing configuring express to use body-parser as middle-ware. */
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

/* Initialize the main project folder. */
app.use(express.static('dist'))

/* Transfers files at the given path when GET request is made to the homepage */
app.get('/', (req, res) => {
  /* Prod mode path. */
  res.sendFile('dist/index.html')
  /* Dev mode path. */
  // res.sendFile(path.resolve('src/client/views/index.html'))
})

/**  
 * Setup server to run on port: 8087 
 * Listen on this port process.env.PORT for heroku */
const port = 8087
app.listen(port, (err) => {
  if (err) throw new Error(err)
  console.log(`Server is running on port https://localhost:${port} !!`)
})

/** Global Varibles
 *
 * - meaningcloud API base URL.
 * - meaningcloud API key.
 * 
 */
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
const meaningCloudKey = process.env.MC_API_KEY


/* Setup route '/add' to recive POST requiest. */
app.post('/add', async (req, res) => {
  /* Get Article URL from the client side. */
  const {
    articleUrl
  } = await req.body

  /* Fetch data from meaningCloud API and assign recived data to the response constant. */
  const response = await fetch(`${baseURL}?key=${meaningCloudKey}&url=${articleUrl}&lang=en`)
  try {
    /* Convert the recived data into json and assign it to the meaningCloudData constant. */
    const meaningCloudData = await response.json()

    /* Send the object 'alldata' that contain the spacify data to the client side */
    res.send(
      (recived_ApiData = {
        score: meaningCloudData.score_tag,
        agreement: meaningCloudData.agreement,
        subjectivity: meaningCloudData.subjectivity,
        confidence: meaningCloudData.confidence,
        irony: meaningCloudData.irony,
      })
    )

    /* Handle error if occur */
  } catch (error) {
    console.error(error.message)
  }
})