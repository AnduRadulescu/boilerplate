const jwt = require('jsonwebtoken');
const jwtPrivateKey = "cefvvaesjbdsafdas";

const student = require('../models').students;

exports.login = (req, res) => {
    student.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(student => {
        if (!student) {
            return res.status(204).send({
                message: "student not found!"
            });
        }
        let tokenString = jwt.sign({
            id: student.id,
            fullName: student.firstName + " " + student.lastName,
            username: student.username,
            updateDate: student.updatedAt,
            expiresInMinutes: 1440 * 30
        }, jwtPrivateKey);
        return res.status(200).jsonp({
            token: tokenString
        });
    }).catch(error => res.status(400).send(error));
};