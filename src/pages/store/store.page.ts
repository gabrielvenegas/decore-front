import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { PlanService } from 'src/services/plan.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage implements OnInit {
  data: any[];
  hover: number;
  constructor(private router: Router, private planService: PlanService, private activeRoute: ActivatedRoute) {


    this.activeRoute.queryParams.subscribe(queryParams => {
      const category = +queryParams.type;
      if (!isNaN(category))
        this.getData(category);
    });


  }

  ngOnInit() {
  }

  async goToDetails(product: any) {
    await this.router.navigateByUrl(`/store/product-detail?product=${product.id}`);
  }

  getData(idCategory) {
    this.planService.getProducts(idCategory)
      .subscribe(res => { this.data = res; });
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
