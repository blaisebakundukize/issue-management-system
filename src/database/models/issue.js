'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
      this.belongsTo(models.User, { foreignKey: 'assignedTo', onDelete: 'SET NULL'});
    }
  };
  Issue.init({
    name: DataTypes.STRING,
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Issue',
  });

  return Issue;
};
