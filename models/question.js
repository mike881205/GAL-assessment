module.exports = function (sequelize, DataTypes) {
    let Question = sequelize.define("Question", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Question.associate = function (models) {
        Question.hasMany(models.Response, {
            onDelete: "cascade"
        });
    };

    Question.associate = function (models) {
        Question.belongsTo(models.Section, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Question;
};