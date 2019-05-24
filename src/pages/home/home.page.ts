import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/services/plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private planService: PlanService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.getPlans();
  }


  // getPlans() {
  //   this.planService.getPlans()
  //     .subscribe(res => console.log(res));
  // }
}
