const subject = require('../models').subject;

exports.getAllMarks = function (req, res, next) {
    subject.findAll({
        include: [{all: true}]
    }).then(subjects => {
        res.jsonp(subjects);
    }).catch(err => {
        console.log(err);
        return res.send('server error');
    });
};