import { Sequelize } from 'sequelize';
import dotenv from 'dotenv-flow';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
});

