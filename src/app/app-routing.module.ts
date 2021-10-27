import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

// path = string matches the url -> localhost:4200/heroes
// component = comp that router should create when navigating to this route
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent }, //(:) -> placeholder for id
  {path: 'heroes', component: HeroesComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // available throughout the application
})
export class AppRoutingModule { }
