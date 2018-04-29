const subject = require('../models').subject;

exports.getAllMarks = function (req, res, next) {
    console.log('mortii ma-sii')
    subject.findAll({
        include: [{all: true}]
    }).then(subjects => {
        res.jsonp(subjects);
    }).catch(err => {
        console.log(err);
        return res.send('server error');
    });
};