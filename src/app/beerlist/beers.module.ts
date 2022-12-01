import { BeersService } from './beers.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerlistComponent } from './beerlist.component';
import { BeersEffects } from '../store/beers.effects';
import { beersReducers } from '../store';
import { BeersRoutingModule } from './beers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([BeersEffects]),
    FormsModule,
    HttpClientModule,
    BeersRoutingModule,
    StoreModule.forFeature('drinks', beersReducers),
  ],
  declarations: [BeerlistComponent, BeerDetailComponent],
  providers: [BeersService],
})
export class BeersModule {}
