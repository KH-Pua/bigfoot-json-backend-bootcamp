const express = require('express')
//const { getSightings } = require('./utils.js')
var cors = require('cors')
require('dotenv').config()

const SightingsController = require('./controller/SightingsController.js');
const sightingsController = new SightingsController();

const SightingsRouter = require('./routers/SightingsRouters.js');
const sightingsRouter = new SightingsRouter(sightingsController, express)

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/sightings', sightingsRouter.route())
////////////////////////////////////////////
// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings);
// });

// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const {sightingIndex} = req.params;
//   // Do we need to save the data from "getSightings()" after calling it for the first time?
//   const sightings = await getSightings();
//   res.json(sightings[sightingIndex])
// })
////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
