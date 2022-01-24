import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'filter', loadChildren:() => import('./modules/filter/filter.module').then(m => m.FilterModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
