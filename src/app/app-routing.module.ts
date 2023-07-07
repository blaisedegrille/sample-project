import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetarolasComponent } from './betarolas/betarolas.component';
import { HomeComponent } from './home/home.component';
import { KitarolasComponent } from './kitarolas/kitarolas.component';
import { KomissioComponent } from './komissio/komissio.component';
import { RaktarkeszletComponent } from './raktarkeszlet/raktarkeszlet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kitarolas', component: KitarolasComponent },
  { path: 'betarolas', component: BetarolasComponent },
  { path: 'komissio', component: KomissioComponent },
  { path: 'raktarkeszlet', component: RaktarkeszletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
