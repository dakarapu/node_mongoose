'use strict';

import { dbConnection as mongoClient } from '../config/db.js';

class UserModel {
  static learner() {
    try {
      //const mongoClient = dbConnection;
      const learnerSchema = new mongoClient.Schema({
        name: { type: String, required: true },
        subject: { type: String, required: true },
      });

      const Learner = mongoClient.model('Learner', learnerSchema);
      return Learner;
    } catch (e) {
      //console.log(e);
      return e;
    }
  }
}

export default UserModel;
