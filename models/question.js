module.exports = function(sequelize, DataTypes) {
    let Question = sequelize.define("Question", {
        section: {
            type: DataTypes.STRING,
            allowNull: false
        },
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

    return Question;
};