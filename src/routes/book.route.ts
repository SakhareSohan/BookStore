import express, { IRouter } from 'express';
import bookController from '../controllers/book.controller';
import userValidator from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

class BookRoutes {
  private BookController = new bookController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {

    //// Admin routes
    // req.body.userId = id;
    // req.body.role = role;
    this.router.get('/', userAuth, this.BookController.getAllBook); // get all books

    this.router.get('/:adminid', userAuth, this.BookController.getBookAdmin); // get books by admin id

    this.router.get('/:bookid', userAuth, this.BookController.getBookId); // get books by book id

    this.router.post('/', userAuth, this.BookController.createBook); // create book

    this.router.post('/:bookid/update', userAuth, this.BookController.updateBook); // update book

    this.router.delete('/:bookid/delete', userAuth, this.BookController.deleteBook)// delete book

    //// User routes

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default BookRoutes;
