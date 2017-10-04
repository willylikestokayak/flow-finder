'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersRivers = sequelize.define('usersRivers', {
    userId: DataTypes.INTEGER,
    riverId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersRivers;
};