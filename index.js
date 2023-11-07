const express = require('express')
//const { getSightings } = require('./utils.js')
var cors = require('cors')
require('dotenv').config()

//import db
const db = require('./db/models');
const { sighting, comment, category } = db;

const SightingsController = require('./controllers/SightingsController.js');
const CategoriesController = require('./controllers/CategoriesController.js');

const sightingsController = new SightingsController({ dbTable: sighting, comment, category });
const categoriesController = new CategoriesController({ dbTable: category, sighting })

const SightingsRouter = require('./routers/SightingsRouters.js');
const CategoriesRouter = require('./routers/CategoriesRouters.js');

const sightingsRouter = new SightingsRouter(sightingsController, express)
const categoriesRouter = new CategoriesRouter(categoriesController, express)

const PORT = process.env.PORT;
const app = express();

const corsOption = {
  origin: "localhost:3001",
  optionsSuccessStatus: 200
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/sightings', sightingsRouter.route());
app.use('/categories', categoriesRouter.route());

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
