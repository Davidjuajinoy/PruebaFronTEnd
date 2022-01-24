import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPageComponent } from './pages/filter-page/filter-page.component';


const routes: Routes = [
  {
    path:'', component: FilterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule { }
