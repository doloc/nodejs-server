const courseRouter = require('./courses');

function route(app) {
    app.use('/courses', courseRouter);
}

module.exports = route;