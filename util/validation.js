const ObjectId = require('mongoose').Types.ObjectId;

// validate user signup input
module.exports.validateSignupInput = (email, password) => {
  const errors = {};
  if (email.trim() === ''){
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}

// validate user login input
module.exports.validateLoginInput = (email, password) => {
  const errors = {};

  if (email.trim() === ''){
    errors.email = 'Email must not be empty';
  }
  
  if (password.trim() === ''){
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  }
}

// check if id is a valid mongodb id
module.exports.validateMongooseId = (id) => {
  if(ObjectId.isValid(id)){
    if((String)(new ObjectId(id)) === id)
      return true;       
    return false;
  }
  return false;
}