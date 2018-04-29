const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Set up the express app
const app = express();

// app.use(helmet())
app.use(cors());

// Config
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());


//controllers
const student = require('./server/rest/student');
const subject = require('./server/rest/subject');
const teacher = require('./server/rest/teacher');


app.use('/api/student', student);
app.use('/api/subject', subject);
app.use('/api/teacher', teacher);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.jsonp(err.status || 500);
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

module.exports = app;