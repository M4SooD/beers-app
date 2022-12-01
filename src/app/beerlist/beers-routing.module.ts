import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerlistComponent } from './beerlist.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeerlistComponent,
  },
  {
    path: 'beers/:id',
    runGuardsAndResolvers: 'always',
    component: BeerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersRoutingModule {}
