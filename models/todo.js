'use strict';

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
    // ,
    // owner: DataTypes.BOOLEAN

    

  });
  return Todo;
};
