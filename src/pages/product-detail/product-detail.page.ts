import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/services/plan.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {
  productId: number;
  product: any;
  cart = {
    amount: 1,
    color: "",
    productId: 0,
    price: 0,
    discountPrice: 0,
    mainPic: "",
    name: ""
  };
  chosenPic = 1;
  thumbImage = "";
  constructor(public router: Router, private planService: PlanService, private sharedService: SharedService) {
    this.productId = +router.url.substring(router.url.indexOf('=') + 1);
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.planService.getProduct(this.productId).subscribe(res => { this.product = res; this.thumbImage = res.photos[0].path; });
  }

  add() {
    if (this.cart.amount < this.product.amount)
      this.cart.amount++;
  }

  take() {
    if (this.cart.amount > 1)
      this.cart.amount--;
  }

  changePic(id: number) {
    this.thumbImage = this.product.photos.find((p) => p.id === id).path;
  }

  addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    this.cart.productId = this.productId;
    this.cart.price = this.product.price;
    this.cart.discountPrice = this.product.discountPrice;
    this.cart.mainPic = this.thumbImage;
    this.cart.name = this.product.name;

    if (cart) {
      if (cart.find((c: { productId: number; }) => c.productId === this.productId)) {
        alert("Produto já adicionado. Caso queira alterar a quantidade, vá em 'CARRINHO'");
        return;
      }

      cart.push(this.cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      let cartList = [];
      cartList.push(this.cart);
      localStorage.setItem("cart", JSON.stringify(cartList));
    }

    this.sharedService.itemAdded.emit({ reload: true });
  }
}
