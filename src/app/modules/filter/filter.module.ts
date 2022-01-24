import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';
import { FilterRoutingModule } from './filter-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LevelFilterPipe } from './pipes/level-filter.pipe';




@NgModule({
  declarations: [
    FilterPageComponent,
    LevelFilterPipe
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class FilterModule { }
