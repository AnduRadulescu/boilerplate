'use strict';
module.exports = (sequelize, DataTypes) => {
    const subject = sequelize.define('subject', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grade: {
            type: DataTypes.INTEGER,
        }
    }, {});
    subject.associate = function (models) {
        subject.belongsToMany(models.students, {
            through: {
                model: models.studentsSubject,
                unique: false,
            }, foreignKey: 'subjectId'
        })
    };
    return subject;
};