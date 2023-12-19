const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        res.send('COURSE DETAIL - ' + req.params.slug);
    }
}

module.exports = new CourseController();