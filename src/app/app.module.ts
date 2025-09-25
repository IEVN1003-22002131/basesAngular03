import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/Cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroFilterPipe,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CinepolisComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
