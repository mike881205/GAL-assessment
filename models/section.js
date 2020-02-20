module.exports = function(sequelize, DataTypes) {
    let Section = sequelize.define("Section", {
        section: {
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

    Section.associate = function (models) {
        Section.hasMany(models.Question, {
          onDelete: "cascade"
        });
      };

    return Section;
};