module.exports = function (sequelize, DataTypes) {
    let Question = sequelize.define("Question", {
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    Question.associate = function (models) {
        Question.belongsTo(models.Section, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Question.associate = function (models) {
        Question.hasMany(models.Response, {
            onDelete: "cascade"
        });
    };

    return Question;
};