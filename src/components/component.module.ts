import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FamilyPlanComponent } from './family-plan/family-plan.component';
import { StoreSectionComponent } from './store-section/store-section.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleMapModule } from 'ngx-google-map';
import { NgxImageZoomModule } from 'ngx-image-zoom';
const COMPONENTS = [
  BannerComponent,
  InfoSectionComponent,
  FamilyPlanComponent,
  StoreSectionComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
  imports: [BrowserModule, SlideshowModule, NgxGoogleMapModule, NgxImageZoomModule.forRoot()],
  exports: [...COMPONENTS, CommonModule, FormsModule]
})
export class ComponentModule { }