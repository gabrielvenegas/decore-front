import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {

  items = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem("cart"));
  }

  async checkout() {
    await this.router.navigate(['/checkout']);
  }

  getTotal() {
    let total = 0;
    this.items.forEach(element => {
      total += element.price * element.amount;
    });
    return total;
  }


  add(element: { amount: number; }) {
    element.amount++;
  }

  take(element: { amount: number; }) {
    if (element.amount > 1)
      element.amount--;
  }

}
