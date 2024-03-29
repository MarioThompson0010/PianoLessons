const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false

        },
        
    });

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook('beforeCreate', (user) => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });


    User.associate = function (models) {
        User.hasMany(models.CalendarModel, {
          onDelete: 'cascade'
        });
      };

    return User;
}