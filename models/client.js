module.exports = function(sequelize, DataTypes) {
    let Client = sequelize.define("Client", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [7]
        },
        number_street: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1], 
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1], 
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [2], 
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [5]
        },
        assessor: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
        },
        audit: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
        },
        dwelling: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
        },
        gateCode: {
            type: DataTypes.STRING,
            len: [1],
        }
    });

    Client.associate = function (models) {
        Client.hasMany(models.Response, {
          onDelete: "cascade"
        });
      };

    return Client;
};