var sequelize = require("sequelize");

var sequelize = new Sequelize("phtn224x85wco5s4", "t3nfqnyp1jije7v1", "u5kxn5u7av1vtnzo" {
	host: "Localhost",
	dialect: "mysql",
	pool: {
		max: 5
		min: 0,
		idle: 1000
	}
});

module.exports = sequelize;
