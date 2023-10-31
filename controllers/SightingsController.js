const { getSightings } = require('./utils.js')

class SightingsController {
    constructor() {
    }

    listAll = async (req, res) => {
        const sightings = await getSightings();
        res.json(sightings);
    }

    listIndividual = async (req, res) => {
        const {sightingIndex} = req.params;
        const sightings = await getSightings();
        res.json(sightings[sightingIndex]);
    }

    
}

module.exports = SightingsController