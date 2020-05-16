const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database');
const User = require('./user.schema');

class Child extends Model {
}

Child.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  parentId: { type: DataTypes.INTEGER },
  fullname: { type: DataTypes.STRING, defaultValue:'No',
    validate: {
      len: [0,32]
    }
  },
}, {
  sequelize,
  modelName: 'child'
});

Child.belongsTo(User, {
  foreignKey: 'parentId'
});
User.hasMany(Child, {
  foreignKey: 'parentId'
});

module.exports = Child;