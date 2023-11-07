class CategoriesRouter {
  constructor(categoriesController, express) {
    this.controller = categoriesController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();

    // GET request
    router.get("/", this.controller.getAll);
    router.get("/:id", this.controller.getOne);
    // POST request
    router.post("/", this.controller.createOne);
    // PUT request
    router.put("/", this.controller.associateCategoryToSighting);
    return router;
  };
}

module.exports = CategoriesRouter;
