import { mongoose } from 'mongoose';
import validator from 'validator';

mongoose.connect('mongodb://127.0.0.1:27017/mongo_learn');

const udemyUsers = mongoose.model('udemy_users', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error('Not a valid Email is provided');
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(val) {
      if (val.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

const user = new udemyUsers({
  name: 'Udemy',
  email: 'udemy@gmail.com',
  password: 'password',
});

user
  .save()
  .then((r) => {
    console.log(r);
  })
  .catch((e) => console.log(e));
