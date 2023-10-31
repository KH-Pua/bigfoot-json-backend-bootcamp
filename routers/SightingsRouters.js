//const {Router} = require ("express");

class SightingsRouter {
    constructor(sightingsController, express) {
        this.controller = sightingsController;
        this.express = express;
    }

    route = () => {
        //"Router" is an instance of express 
        let router = this.express.Router();

        router.get('/sightings', this.controller.listAll);
        router.get('/sightings/:sightingIndex', this.controller.listIndividual);

        return router
    }
}

module.exports = SightingsRouter