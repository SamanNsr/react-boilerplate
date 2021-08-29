import Joi from 'joi';

export const REQUIRED_VALIDATOR = Joi.required();
export const EMAIL_VALIDATOR = Joi.string()
  .email({ tlds: { allow: false } })
  .message('email must be valid')
  .label('email');
