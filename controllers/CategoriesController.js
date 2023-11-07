const BaseController = require("./BaseController.js");

class CategoriesController extends BaseController {
  constructor({ dbTable, sighting }) {
    super({ dbTable });
    this.sighting = sighting;
  }

  getAll = async (req, res) => {
      const output = await this.dbTable.findAll();
      return res.json({success: true, response: output});
  }

  getOne = async (req, res) => {
      const { id } = req.params;
      const output = await this.dbTable.findByPk(id);
      if (!output) {
          return res.status(404).json({success: false, msg: "Id not found"})
      }
      return res.json({success: true, response: output});
  }

  createOne = async (req, res) => {
    const { weatherCategory } = req.body;
    console.log("Categories", req.body);
    if (!weatherCategory) {
      return res.status(400).json({ success: false, msg: "Imput error" });
    }
    try {
      const newCategories = await this.dbTable.create({
        weatherCategory,
      });
      console.log("New caategory inserted");
      return res.json({ success: true, response: newCategories });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  //M-M Controller (Query with condiiton)
  associateCategoryToSighting = async (req, res) => {
    const { categoryId, sightingsId } = req.body;
    console.log("categoryId", categoryId);
    console.log("sightingsId", sightingsId);
    if (!categoryId || !sightingsId) {
        return res.status(400).json({ success: false, msg: "Input error" });
    }
    try {
        const category = await this.dbTable.findByPk(categoryId);
        const sighting = await this.sighting.findByPk(sightingsId);
        await sighting.setCategories(category);
        return res.json({success: true, category, sighting});
    } catch (err) {
        return res.status(400).json({success: false, msg: err});
    }

  


    
  };
}

module.exports = CategoriesController;
