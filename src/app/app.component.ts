import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { SharedService } from 'src/services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class AppComponent implements OnInit {
  title = 'app';
  showLeftIcons = false;
  items = [];
  constructor(private animateScrollService: NgAnimateScrollService, @Inject(DOCUMENT) document, private router: Router, private sharedService: SharedService) {

  }

  ngOnInit() {
    this.getCurrentLocation();
    this.items = JSON.parse(localStorage.getItem("cart"))

    this.sharedService.itemAdded.subscribe((data: any) => {
      if (data.reload)
        this.items = JSON.parse(localStorage.getItem("cart"));
    });
  }

  scroll(id: string) {
    this.animateScrollService.scrollToElement(id, 500);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.add('fade-in');
      this.showLeftIcons = true;
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.remove('fade-in');
      this.showLeftIcons = false;
    }
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((a) => {
      // console.log(a);
    })
  }

  goToPage(route: string) {
    this.router.navigateByUrl(route, { replaceUrl: true });
  }
}