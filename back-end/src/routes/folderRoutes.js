var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Folder = require('../models/Folder');
var authenticate = require('../authenticate');

router.use(bodyParser.json());

router.route('/')
.get(authenticate.verifyUser, async (req, res, next) => {
    try{
        const foldersDB = await Folder.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applications/json');
        res.json(foldersDB);
    } catch(err){
        err = {};
        res.statusCode = 404;
        res.json(err);
    }
})
.post(authenticate.verifyUser, (req, res, next) => {
    Folder.create(req.body)
    .then((folder) => {
        res.statsCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projeto);
    }, (err) => next(err))
    .catch((err) => next(err));
})

router.route('/:id')
.get(authenticate.verifyUser, async (req, res, next) => {
    let err;
    res.setHeader('Content-Type', 'application/json');
    try{
        const Folders = await Folder.findById(req.params.id).populate('Folders');
        if(Folders != null){
            res.statusCode = 200;
            res.json(Folders);
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
    Folder.findByIdAndRemove(req.params.id)
     .then((resp) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(resp.id);
     }, (err) => next(err))
     .catch((err)=> next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
    Folder.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    .then((folder) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(folder);
    }, (err) => next(err))
    .catch((err) => next(err));
})