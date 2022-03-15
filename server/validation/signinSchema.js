const Joi = require('joi');

const signinValiadtion = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

module.exports = signinValiadtion;