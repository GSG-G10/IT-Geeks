const joi = require('joi');

const signupSchema = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  email_address: joi.string().email().required(),
  password: joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]')).required(),
  confirmPassword: joi.ref('password'),
  phono_no: joi.number().min(7).required(),
});

module.exports = { signupSchema };
