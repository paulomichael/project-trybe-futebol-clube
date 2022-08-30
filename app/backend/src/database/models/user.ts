import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // public <campo>!: <tipo>;
  username: string;
  role: string;
  email: string;
  password: string;
  id: number;
}

User.init({
  // ... Campos
  username: STRING,
  role: STRING,
  email: STRING,
  password: STRING,
  id: { primaryKey: true, type: INTEGER },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'user',
  timestamps: false,
});

export default User;
