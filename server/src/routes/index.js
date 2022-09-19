const express = require("express");
const routes = express.Router();

const TravelsController = require('../controllers/travelsController');

routes.post('/travel', TravelsController.createTravel)
routes.get('/travel', TravelsController.listTravels)
routes.get('/travel/alphabet', TravelsController.listTravelAlphabet)
routes.get('/travel/:continent', TravelsController.listTravelsByContinent)
routes.delete('/travel/:id', TravelsController.deleteTravel)
routes.put('/travel/:id', TravelsController.updateTravel)

module.exports = routes
