'use strict';

import { mongoose } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); // make sure to set the path if using dotenv in subfolders than root

class DBConnection {
  constructor() {
    this.connection = null;
  }
  static init() {
    if (!DBConnection.instance) {
      try {
        this.connection = mongoose.connect(
          `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`,
          {
            serverSelectionTimeoutMS: 5000,
          }
        );

        mongoose.connection.on('connected', () => {
          console.log(`Connected to database..`);
        });

        mongoose.connection.on('disconnected', () => {
          console.log(`Disonnected from database..`);
        });
      } catch (e) {
        console.log(`Error connecting to database: ${e}`);
      }
      DBConnection.instance = new DBConnection();
    }
    return this.connection;
  }
}

export const dbConnection = await DBConnection.init();
