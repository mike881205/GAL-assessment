module.exports = function(sequelize, DataTypes) {
    let Response = sequelize.define("Response", {
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        observation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            len: [1]
        }
    });

    Response.associate = function (models) {
        Response.hasMany(models.Client, {
          onDelete: "cascade"
        });
      };

    Response.associate = function (models) {
        Response.belongsTo(models.Question, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Response;
};