import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {

    this.router.post('/', this.UserValidator.registration, this.UserController.newUser);  // registration

    this.router.post('/admin', this.UserValidator.registrationAdmin, this.UserController.newUser);  // registration admin

    this.router.post('/login', this.UserController.getUser); // login
    
    //// Admin routes

    // this.router.get('', this.UserController.getAllUsers);

    // this.router.post(
    //   '',
    //   this.UserController.newUser
    // );

    //// User routes

    // this.router.get('/:id', userAuth, this.UserController.getUser);

    // this.router.put('/:id', this.UserController.updateUser);

    // this.router.delete('/:id', this.UserController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
