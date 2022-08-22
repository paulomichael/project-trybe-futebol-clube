import { Model, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // public <campo>!: <tipo>;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init({
  // ... Campos
  username: STRING,
  role: STRING,
  email: STRING,
  password: STRING
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'user',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS: 
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default User;
