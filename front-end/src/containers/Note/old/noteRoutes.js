var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Note = require('../models/note');
var authenticate = require('../authenticate');

router.use(bodyParser.json());

router.route('/')
.get(authenticate.verifyUser, async (req, res, next) => {
    try{
        const notesDB = await Note.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applications/json');
        res.json(notesDB);
    } catch(err){
        err = {};
        res.statusCode = 404;
        res.json(err);
    }
})
.post(authenticate.verifyUser, (req, res, next) => {
    Note.create(req.body)
    .then((note) => {
        res.statsCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(note);
    }, (err) => next(err))
    .catch((err) => next(err));
})

router.route('/:id')
.get(authenticate.verifyUser, async (req, res, next) => {
    let err;
    res.setHeader('Content-Type', 'application/json');
    try{
        const notes = await Note.findById(req.params.id).populate('notes');
        if(notes != null){
            res.statusCode = 200;
            res.json(notes);
        } else {
            err = {};
            res.statsCode = 404;
            res.json(err);
        }

    } catch (errParam){
        res.statusCode = 404;
        res.json({});
    }
})
.delete(authenticate.verifyUser, (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
     .then((resp) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(resp.id);
     }, (err) => next(err))
     .catch((err)=> next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
    Note.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    .then((note) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(note);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router;