'use strict';
module.exports = (sequelize, DataTypes) => {
    const studentsSubject = sequelize.define('studentsSubject', {
        subjectId: DataTypes.INTEGER,
        studentId: DataTypes.INTEGER
    }, {});
    studentsSubject.associate = function (models) {
        console.log("-> many yo many");
        studentsSubject.belongsTo(models.students, {
            foreignKey: 'studentId'
        });
        studentsSubject.belongsTo(models.subject, {
            foreignKey: 'subjectId'
        });
    };
    return studentsSubject;
};