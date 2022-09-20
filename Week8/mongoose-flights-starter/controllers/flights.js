const express = require('express');
const router = express.Router();
const Flights = require('./models/Flights');

// INDUCES -- if you put your routes in this order, it will never fail you!

// Index -- View of ALL ITEMS

app.get('/flights', (req, res) => {
    Flights.find({}, (error, allFlights) => {
        res.render('flights/Index', {
        flights: allFlights
        });
    })
});


router.get('/', (req, res) => { // Route is technically /flights because in server.js it is put as the base route for this controller
  // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
})

// New -- Form to CREATE a new Item

router.get('/new', (req, res) => { // technically /flights/new
  // In here goes a res.render to show the 'create a new flight' form (New.jsx view)
})

// Delete -- action to DELETE an item

// Update -- action to UPDATE an item

// Create -- action to CREATE a new item

router.post('/', (req, res) => { // technically /flights
  // In here goes your Flight.create(), passing your req.body to it, and res.redirect-ing to your index page.
})

// Edit -- Form to UPDATE an item

// Show -- View of ONE ITEM


// New

app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
  });
  
  // Delete
  
  app.delete('/fruits/:id', (req, res) => {
    Fruit.deleteOne({
      _id: req.params.id
    }, (error, data) => {
      console.log(data);
      res.redirect('/fruits');
    })
  });
  
  // Update
  
  app.put('/fruits/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true
    } else {
      req.body.readyToEat = false
    }
    Fruit.updateOne({
      _id: req.params.id
    }, req.body, (error, data) => {
      if (error) {
        console.error(error);
        res.json({
          error: error
        });
      } else {
        res.redirect(`/fruits/$req.params.id`);
      }
    });
  });
  
  // Create
  
  app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
      res.redirect('/fruits')
    })
  });
  
  // Edit
  
  app.get('/fruits/:id/edit', (req, res) => {
    Fruit.findOne({
      _id: req.params.id
    }, (error, foundFruit) => {
      if (error) {
        console.error(error);
        res.json({
          error: error
        })
      } else {
        res.render('fruits/Edit', { fruit: foundFruit });
      }
    })
  });
  
  // Show
  
  app.get('/fruits/:id', (req, res) => {
    Fruit.findOne({ _id: req.params.id }, (error, foundFruit) => {
      res.render('fruits/Show', {
        fruit: foundFruit
      });
    });
  });