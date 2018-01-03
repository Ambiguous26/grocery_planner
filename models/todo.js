'use strict';

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
	// select: {
	// 	text: VARCHAR (50)
	// }
    // ,
    // select: DataTypes.STRING

    

  });
  return Todo;
};
