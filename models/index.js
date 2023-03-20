const User = require('./User');
const Fight = require('./Fight');

User.hasMany(Fight, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Fight.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Fight };
