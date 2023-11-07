//const { getSightings } = require('../utils.js')
const BaseController = require('./BaseController.js');

class SightingsController extends BaseController {
    //"model" is passed in to this class
    constructor({ dbTable, comment, category }) {
        super({ dbTable });
        this.comment = comment;
        this.category = category;
    }

    getAll = async (req, res) => {
        const output = await this.dbTable.findAll({
            include: this.category,
        });
        return res.json({success: true, response: output});
    }

    getOne = async (req, res) => {
        const { id } = req.params;
        const output = await this.dbTable.findByPk(id, {
            include: this.category,
        });
        if (!output) {
            return res.status(404).json({success: false, msg: "Id not found"})
        }
        return res.json({success: true, response: output});
    }

    // Need to have {date, location, notes} in the body @ frontend when submitting. 
    createOne = async (req, res) => {
        const { date, location, notes } = req.body;
        console.log('sightings', req.body);
        if (!date || !location || !notes ) {
            return res.status(400).json({success: false, msg: "Input error"});
        }
        try {
            //create({obj})
            const newSightings = await this.dbTable.create({
                date,
                location, 
                notes, 
            })
            console.log("New sightings inserted");
            console.log(newSightings);
            return res.json({success: true, response: newSightings});
        } catch (err) {
            return res.status(400).json({success: false, msg: err});
        }
    }

    editOne = async (req, res) => {
        const { id } = req.params;
        const { date, location, notes } = req.body;
        console.log('sightings', req.body);
        if (!date, !location, !notes) {
            return res.status(400).json({success: false, msg: "Input error, must fill in all the blanks."})
        }
        try {
            await this.dbTable.update({
                date,
                location,
                notes,
            }, 
            {
                where: { id }
            });
            console.log("Sightings edited");
            return res.json({success: true, id, date, location, notes})
        } catch(err) {
            return res.status(400).json({success: false, msg: err});
        }
    }

    //1-M Controller (Query with condition)
    retreiveComment = async (req, res) => {
        const { sightingId } = req.params;
        //Lazy Loading
        // const lazySightings = await this.model.findByPk(id);
        /////////////get"Comments()", the name inside "" is based on the model name 
        // const sightingsComments = await lazySightings.getComments();

        //Eager Loading
        const eagerSightings = await this.comment.findAll({
            where: {sightingId},
        });

        return res.json({
            success: true,
            response: eagerSightings
        });
    }

    //1-M Controller (Query with condition)
    createComment = async (req, res) => {
        const { sightingId } = req.params;
        const { sightingComment } = req.body;
        console.log('comments', req.body);
        if (!sightingComment ) {
            return res.status(400).json({success: false, msg: "Input error"})
        }
        try {
            //create({obj})
            //createSighting() OR createsighting() OR create()
            const newSightingComment = await this.comment.create({
                sightingComment,
                sightingId,
            })
            console.log("New comment inserted")
            return res.json({success: true, response: newSightingComment})
        } catch (err) {
            return res.status(400).json({success: false, msg: err})
        }
    }

    //1-M Controller (Query with condition)
    editComment = async (req, res) => {
        //const { sightingId } = req.params;
        const { sightingComment, commentId } = req.body;
        console.log('comments', req.body);
        if (!sightingComment) {
            return res.status(400).json({success: false, msg: "Input error"})
        }
        try{
            const commentToEdit = await this.comment.findByPk(commentId);
            
            if (!commentToEdit) {
                return res.status(404).json({success: false, msg: "Comment cannot found"});
            }
            commentToEdit.sightingComment = sightingComment;
            await commentToEdit.save();
            console.log("New comment inserted");

            return res.json({success: true, response: commentToEdit})
        } catch (err) {
            return res.status(400).json({success: false, msg: err})
        }
    }

    //1-M Controller (Query with condition)
    deleteComment = async (req, res) => {
        const { commentId } = req.body;
        if (!commentId) {
            return res.status(400).json({success: false, msg: "Id cannot found"})
        }
        try {
            const commentToDelete = await this.comment.findByPk(commentId);
            if (!commentToDelete) {
                return res.status(404).json({success: false, msg: "Comment cannot found"});
            }
            await commentToDelete.destroy();
            console.log("Comment deleted");

            return res.json({success: true, response: commentId, msg: "Comment deleted successfully."})
        } catch (err) {
            return res.status(400).json({success: false, msg: err})
        }
    }
}

module.exports = SightingsController