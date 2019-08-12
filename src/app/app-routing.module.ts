import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './customer/creation/creation.component';
import { ListComponent } from './customer/list/list.component';
import { StatisticsComponent } from './customer/statistics/statistics.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'customer-creation', component: CreationComponent},
  { path: 'customer-list', component: ListComponent},
  { path: 'customer-statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
