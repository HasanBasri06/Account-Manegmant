const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = User