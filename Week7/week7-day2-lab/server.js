const express = require('express')
const app = express()

//Greetings

app.get('/greetings/:name', (req, res) => {
    res.json({
        message:`Hello, ${req.params.name}! It's so great to see you!`
    })
})

//Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total * (req.params.tipPercentage / 100);
    res.json({
        tip: `Your tip amount is ${tip}`
    })
})

//Magic 8 Ball

app.get('/magic/:question', (req, res) => {
    let question = req.params.question;
    let answer = Math.floor(Math.random() * answers.length - 1)
    res.json({
        question:`${question} ${answers(answer)}`
    })
})



const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.listen(3000, () => {
    console.log('Listening on port 3000')
    })