'use strict';

import UserModel from '../models/users.js';
const user = UserModel.learner();

const createLearner = async function (
  data = [{ name: 'Ravikanth', subject: 'Node.js' }]
) {
  try {
    //const userDoc = new user(data);
    const doc = await user.insertMany(data);
    return doc;
  } catch (e) {
    console.log(e);
  }
};

const findLearners = async function (id, projection = []) {
  try {
    if (!id) {
      const result = await user.find({}, projection.join(' ')).exec();
      return result;
    }

    const result = await user.findById(id, projection.join(' ')).exec();
    return result;
  } catch (e) {
    return e;
  }
};

const deleteLearners = async function (filter, deleteMany = false) {
  try {
    if (deleteMany) {
      const result = await user.deleteMany(filter);
      return result;
    }
    const result = await user.deleteOne(filter);
    return result;
  } catch (e) {}
};

console.log(await createLearner([{ name: 'Nethra', subject: 'Kindergarten' }]));

// console.log(await deleteLearners({}));
// console.log(await findLearners());

export const userController = {
  createLearner,
  findLearners,
  deleteLearners,
};
