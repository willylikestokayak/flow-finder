'use strict';
module.exports = (sequelize, DataTypes) => {
  var river = sequelize.define('river', {
    riverName: DataTypes.STRING,
    riverFlow: DataTypes.STRING,
    flowUnit: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    timeStamp: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.river.belongsToMany(models.user, {through: "usersRivers"})
      }
    }
  });
  return river;
};