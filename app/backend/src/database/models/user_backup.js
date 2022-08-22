// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     firstName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define("Users", {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
//   });
// 
//   return User;
// };

// module.exports = User;
// export default User;

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false
  });
//  User.associate = (models) => {
//    User.hasMany(models.BlogPost, {
//      foreignKey: 'userId', as: 'user',
//    })
//  };

  return User;
};

// module.exports = User;
export default User;
