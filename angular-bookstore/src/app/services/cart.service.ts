import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    // Check whether book/item already in the cart
    let alreadyExistingInTheCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      // Find the book/item in the cart based on the id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      alreadyExistingInTheCart = (existingCartItem != undefined);
    }

    if (alreadyExistingInTheCart) {
      // Increment the quantity
      existingCartItem.quantity++;
    } else {
      // Add to the cart items array
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice(theCartItem);
  }

  calculateTotalPrice(theCartItem: CartItem) {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    // Calculate total price and total quantity
    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    console.log(`total price ${totalPriceValue}, total quantity ${totalQuantityValue}`);

    // Publish the events
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
}
