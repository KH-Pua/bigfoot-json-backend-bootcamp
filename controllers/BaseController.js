class BaseController {
    constructor({dbTable}) {
        this.dbTable = dbTable;
    }

    // getAll = async (req, res) => {
    //     const output = await this.dbTable.findAll();
    //     return res.json({success: true, response: output});
    // }

    // getOne = async (req, res) => {
    //     const { id } = req.params;
    //     const output = await this.dbTable.findByPk(id);
    //     if (!output) {
    //         return res.status(404).json({success: false, msg: "Id not found"})
    //     }
    //     return res.json({success: true, response: output});
    // }
}

module.exports = BaseController;