const { response, request } = require('express')
const express = require('express') //get and use express
const app = express() //we're using express, and storing it as 'app'.  So if you see app anywhere further down in this program, that's express.
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },

    'chance the rapper':{
        'age': 29,
        'birthName':'Chancellor Bennett',
        'birthLocation':'Chicago, Illinois'
    },

    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    //res.json(rappers)
    if(rappers[rappersName]){ //bracket notation used instead of dots because of spaces in object name
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!  You better go catch it!`)
})