import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  // Needed to add the following to make it work
  'dialectOptions': {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  'storage': ':memory:',
});
