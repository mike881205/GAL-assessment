module.exports = function (sequelize, DataTypes) {
  let Section = sequelize.define("Section", {
    section: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applicable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    Section.hasMany(models.Response, {
      onDelete: "cascade"
    });
  };

  Section.associate = function (models) {
    Section.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  return Section;
};