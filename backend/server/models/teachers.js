'use strict';
module.exports = (sequelize, DataTypes) => {
    const teachers = sequelize.define('teachers', {
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
    teachers.associate = function (models) {
        // associations can be defined here
    };
    return teachers;
};