//const {Router} = require ("express");

class SightingsRouter {
  constructor(sightingsController, express) {
    this.controller = sightingsController;
    this.express = express;
  }

  route = () => {
    //"Router" is an instance of express
    let router = this.express.Router();

    // GET request
    router.get("/", this.controller.getAll);
    router.get("/:id", this.controller.getOne);
    // POST request
    router.post("/", this.controller.createOne);
    // PUT request
    router.put("/:id", this.controller.editOne);

    // Route for 1-M relationship
    router.get("/:sightingId/comments", this.controller.retreiveComment);
    router.post("/:sightingId/comments", this.controller.createComment);
    router.put("/:sightingId/comments", this.controller.editComment);
    router.delete("/:sightingId/comments", this.controller.deleteComment);

    return router;
  };
}

module.exports = SightingsRouter;
