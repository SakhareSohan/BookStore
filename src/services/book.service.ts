import sequelize, { DataTypes } from '../config/database';

import book from '../models/book';

class BookService {
  private Book = book(sequelize, DataTypes);

  //get all users
  public getAllBook = async () => {
    const data = await this.Book.findAll();
    return data;
  };

  //create a new user
  public getBookAdmin = async (id) => {
    const data = await this.Book.findAll(id);
    return data;
  };

  //update a user
  public getBookId = async (id, body) => {
    await this.Book.update(body, {
      where: { id: id }
    });
    return body;
  };

  //delete a user
  public createBook = async (id) => {
    await this.Book.destroy({ where: { id: id } });
    return '';
  };

  //get a single user
  public updateBook = async (id) => {
    const data = await this.Book.findByPk(id);
    return data;
  };

  //get a single user
  public deleteBook = async (id) => {
    const data = await this.Book.findByPk(id);
    return data;
  };
}

export default BookService;
