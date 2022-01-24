import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InformationSectionComponent } from './components/information-section/information-section.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    InformationSectionComponent,
    GenericSectionComponent    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    InformationSectionComponent,
    GenericSectionComponent    
  ]
})
export class SharedModule { }


