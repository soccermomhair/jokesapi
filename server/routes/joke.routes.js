const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    // put would change the whole req.body, patch only changes the values in the req.body
    app.patch('/api/jokes/:id', JokeController.updateOneJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}