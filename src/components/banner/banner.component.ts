import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  imgags = [
    'assets/images/sofa01.jpeg',
    'assets/images/sofa02.jpeg',
    'assets/images/sofa03.jpeg'
  ];
  constructor() { }

  ngOnInit() {
    // this.carouselTileItems.forEach(el => {
    //   this.carouselTileLoad(el);
    // });
  }

  // public carouselTileLoad(j) {
  //   // console.log(this.carouselTiles[j]);
  //   const len = this.carouselTiles[j].length;
  //   if (len <= 3) {
  //     for (let i = len; i < len + 15; i++) {
  //       this.carouselTiles[j].push(
  //         this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //       );
  //     }
  //   }
  // }
}
