module.exports = function (sequelize, DataTypes) {
    let Response = sequelize.define("Response", {
        response: {
            type: DataTypes.STRING,
            allowNull: false
        },
        observation: {
            type: DataTypes.STRING,
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

    Response.associate = function (models) {
        Response.belongsTo(models.Section, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Response;
};