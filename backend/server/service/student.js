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

exports.sync = (req, res) => {
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
        try {
            var decoded = jwt.verify(token, jwtPrivateKey);
        } catch (err) {
            // console.log(err);
            console.log('malformed');
            return res.status(401).send({
                message: 'UnAuthorized'
            });
        }
        console.log(decoded);
        student.findOne({
            where: {id: decoded.id}
            , include: [{all: true}]
        }).then((student) => {
            let date = new Date(decoded.updateDate);
            if (student.updatedAt.getTime() === date.getTime()) {
                res.status(200).send({
                    student: student,
                    message: 'Authorized'
                });
            } else {
                throw 'token not up to date';
            }
        }).catch(error => {
            console.log(error);
            res.status(401).send({
                message: 'UnAuthorized'
            });
        });

    } else {
        res.status(401).send({
            message: 'UnAuthorized'
        });
    }
};