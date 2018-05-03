'use strict';
module.exports = (sequelize, DataTypes) => {
    const students = sequelize.define('students', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    students.associate = function (models) {
        students.belongsToMany(models.subject, {
            through: {
                model: models.studentsSubject,
                unique: false,
            }, foreignKey: 'studentId', onDelete: 'CASCADE'
        })
    };
    return students;
};