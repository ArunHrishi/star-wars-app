import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkComponent } from './dark/dark.component';
import { LightComponent } from './light/light.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', component:MainComponent
  },
  {
    path:'light', component:LightComponent
  },
  {
    path:'dark', component:DarkComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
