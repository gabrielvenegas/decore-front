import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  hover = false;
  hover2 = false;
  constructor() { }

  ngOnInit() {
  }

  goToDetails() { }

}
