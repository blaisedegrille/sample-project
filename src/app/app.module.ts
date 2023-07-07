import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { BetarolasComponent } from './betarolas/betarolas.component';
import { KomissioComponent } from './komissio/komissio.component';
import { RaktarkeszletComponent } from './raktarkeszlet/raktarkeszlet.component';
import { KitarolasComponent } from './kitarolas/kitarolas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BetarolasComponent,
    KomissioComponent,
    RaktarkeszletComponent,
    KitarolasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
