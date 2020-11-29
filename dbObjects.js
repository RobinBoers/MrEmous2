const Sequelize = require('sequelize');

const sequelize = new Sequelize('mremous', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false
});

const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);
const CurrencyShop = require('./models/CurrencyShop')(sequelize, Sequelize.DataTypes);
const UserItems = require('./models/UserItems')(sequelize, Sequelize.DataTypes);

UserItems.belongsTo(CurrencyShop, { foreignKey: 'item_id', as: 'item' });

/* eslint-disable-next-line func-names */
Users.prototype.addItem = async function(item, amount) {
	const userItem = await UserItems.findOne({
		where: { user_id: this.user_id, item_id: item.id }, //item_id: item.id
	});

	if (userItem) {
		userItem.amount += amount;
		return userItem.save();
	}

	return UserItems.create({ user_id: this.user_id, item_id: item.id, amount: 1 });
};

/* eslint-disable-next-line func-names */
Users.prototype.getItems = function() {
	return UserItems.findAll({
		where: { user_id: this.user_id },
		include: ['item'],
	});
};

module.exports = { Users, CurrencyShop, UserItems };
