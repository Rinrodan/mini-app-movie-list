const express = require('express')
// const knex = require('knex')(require('../knexfile'))[process.env.NODE_ENV||"development"]
const knex = require('knex')(require('../knexfile.js'))
const app = express()
const port = 8081;



app.get('/movies', (req, res) => {
    res.send('ACTIVE!')
})

app.listen(port, () => {
    console.log(`Knex/Express are listening on port ${port}`)
}) 

app.get('/', function(req,res) {
    knex('title')
    .select('*')
    .then(data => {
        var movieTitles = data.map(data => res.status(200).json(movieTitles))
    .catch(err =>
        res.status(404).json({
            message:
                'The data you are looking for could not be found. Please try again'
        })
    )
})
})

