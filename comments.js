// create web server
var express = require('express');
var router = express.Router();
// load the Comment model
var Comment = require('../models/comment');
// GET /comments
router.get('/', function(req, res, next) {
    // use mongoose to get all comments in the database
    Comment.find(function(err, comments) {
        if (err) {
            return next(err);
        }
        // send JSON encoded comments array
        res.json(comments);
    });
});
// POST /comments
router.post('/', function(req, res, next) {
    // create a new comment based on the POST request body
    var comment = new Comment(req.body);
    // save the comment
    comment.save(function(err) {
        if (err) {
            return next(err);
        }
        // send JSON encoded comment
        res.json(comment);
    });
});
// GET /comments/:id
router.get('/:id', function(req, res, next) {
    // use mongoose to get a comment by ID from the database
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            return next(err);
        }
        // send JSON encoded comment
        res.json(comment);
    });
});
// PUT /comments/:id
router.put('/:id', function(req, res, next) {
    // use mongoose to update a comment by ID in the database
    Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
        if (err) {
            return next(err);
        }
        // send JSON encoded comment
        res.json(comment);
    });
});
// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
    // use mongoose to delete a comment by ID from the database
    Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
        if (err) {
            return next(err);
        }
        // send JSON encoded comment
        res.json(comment);
    });
});
// make controller public
module.exports = router;