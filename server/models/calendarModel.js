module.exports = function (sequelize, DataTypes) {
    const CalendarModel = sequelize.define('CalendarModel', {
        dateStart: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: sequelize.NOW,
            isDate: true
        },
        dateEnd: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: sequelize.NOW,
            isDate: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
            
        }
        //   body: {
        //     type: DataTypes.TEXT,
        //     allowNull: false,
        //     validate: { len: [1, 500] }
        //   }
    });

    CalendarModel.associate = function (models) {
        CalendarModel.belongsTo(models.User, {
            foreignKey: { allowNull: false }
        });
        //   Post.belongsTo(models.Category, {
        //     foreignKey: { allowNull: false }
        //   });
        //Post.hasMany(models.Comments, {});
    };

    return CalendarModel;
};
