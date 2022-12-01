import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { BeerDetailComponent } from './beerlist/beer-detail/beer-detail.component';
import { RouterModule } from '@angular/router';
import { BeersModule } from './beerlist/beers.module';
// import { BeersService } from './beerlist/beers.service';
// import { BeersEffects } from './store/beers.effects';
// import { beersReducer } from './store/beers.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BeersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
