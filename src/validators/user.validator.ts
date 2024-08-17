import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public registration = (req: Request, res: Response, next: NextFunction): void =>{
    const schema = Joi.object({
      firstName: Joi.string().min(4).required(),
      lastName: Joi.string().min(4).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      mobileNo: Joi.number().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  }
  public registrationAdmin = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().min(4).required(),
      lastName: Joi.string().min(4).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      mobileNo: Joi.number().required(),
      role: "admin"
    });
    req.body.role = "admin";
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  }
  
}

export default UserValidator;
