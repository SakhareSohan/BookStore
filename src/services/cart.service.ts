import sequelize, { DataTypes } from '../config/database';
import cart from '../models/cart';

class CartService {
  private Cart = cart(sequelize, DataTypes);

  // Get cart by user ID
  public getCart = async (id) => {
    const data = await this.Cart.findAll({
      where: { userId: id }
    });
    return data;
  };

  public createCart = async (body) => {
    const cartData = await this.Cart.findAll({
      where: {
        userId: body.userId
      }
    });
    if (cartData.length > 0) {
      const cartItem = cartData.find(item => item.bookId === body.bookId);
      if (cartItem){
        cartItem.quantity = body.quantity;
        cartItem.price = body.price;

        const data = await cartItem.save();
        return data;
      } else {
        const obj = {
          "bookId": body.bookId,
          "userId": body.userId,
          "quantity": body.quantity,
          "price": body.price
        }
        const data = await this.Cart.create(obj);
        return data
      }
    } else {
      const obj = {
        "bookId": body.bookId,
        "userId": body.userId,
        "quantity": body.quantity,
        "price": body.price
      }
      const data = await this.Cart.create(obj);
      return data
    }   
  };

  // Method to increase book quantity or add a new book
  public increaseBook = async (body) => {
    const cartData = await this.Cart.findAll({
      where: {
        userId : body.userId
      }
    });
    if (cartData.length > 0) {
      const cartItem = cartData.find(item => item.bookId === body.bookId);
      if (cartItem){
         let quantity = cartItem.quantity;
         quantity += 1;
         cartItem.quantity = quantity;

        const data = await cartItem.save();
        return data;
      } else {
        const obj = {
          "bookId": body.bookId,
          "userId": body.userId,
          "quantity": body.quantity,
          "price": body.price
        }
        const data = await this.Cart.create(obj);
        return data
      }
    } else {
      const obj = {
        "bookId": body.bookId,
        "userId": body.userId,
        "quantity": body.quantity,
        "price": body.price
      }
      const data = await this.Cart.create(obj);
      return data
    }   
  };

  public decreaseBook = async (body) => {
    const cartData = await this.Cart.findAll({
      where: {
        userId : body.userId
      }
    });
    if (cartData.length > 0) {
      const cartItem = cartData.find(item => item.bookId === body.bookId);
      if (cartItem){
         let quantity = cartItem.quantity;
         quantity -= 1;
         cartItem.quantity = quantity;

        const data = await cartItem.save();
        return data;
      } else {
        const obj = {
          "bookId": body.bookId,
          "userId": body.userId,
          "quantity": body.quantity,
          "price": body.price
        }
        const data = await this.Cart.create(obj);
        return data
      }
    } else {
      const obj = {
        "bookId": body.bookId,
        "userId": body.userId,
        "quantity": body.quantity,
        "price": body.price
      }
      const data = await this.Cart.create(obj);
      return data
    }  
  };

  public deleteBook = async (id) =>{
    const data = await this.Cart.destroy({
      where: {
        id: id
      }
    });
    return data;
  }

  public deleteCart = async (body) => {
    const cartData = await this.Cart.destroy({
      where: { 
        userId: body.userId 
      }
    });
    return cartData
  }
}

export default CartService;
