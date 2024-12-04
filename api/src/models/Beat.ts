import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

export const Beat = sequelize.define(
  'Beat',
  {
    // Model attributes are defined here
    wallet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    avatar: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    file: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    url: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);
