const express = require('express');
const app = express();
const url = require('url');

//"99 Bottles of beer on the wall"

app.get('/', (req, res) => {
    res.json({
        link:`take one down, pass it around`
    })
})

// a link that says "take one down, pass it around"
// this should link to /98, where the number represents the number of bottles left.
// When a number is given in the url (get "/:number_of_bottles"), users should see:

// The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// If there are 0 bottles left, do not show a link to "take one down"

// Add a link to start over, which directs the user back to the home page.
// Hints
// You should use an anchortag with an href to link to the next 'page'
// Bonus
// Have some more fun
// Update your page to be something like

// 99 little bugs in the code
// 99 little bugs
// Take on down
// Patch it around
// 127 bugs in the code
// Make the bugs go down by one, but then have some sort of functionality where the bug count can randomlygo up

// You have a lot of freedom to make it work how you want!