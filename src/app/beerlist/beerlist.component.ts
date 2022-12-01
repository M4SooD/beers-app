import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DrinksState } from '../store';
import { fetchBeersListRequest } from '../store/beers.action';
import { getBeersSelector } from '../store/beers.selectors';
import { BeersQuery } from './beers.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.scss'],
})
export class BeerlistComponent implements OnInit {
  public beer_name!: String;
  public beers$!: Observable<any>;
  public page$!: number;
  public updateRequest!: Function;
  
  constructor(
    private store: Store<DrinksState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.updateRequest = (queryParams: BeersQuery) =>
      this.router.navigate(['beers'], {
        queryParamsHandling: 'merge',
        queryParams,
      });

    this.route.queryParams.subscribe((query) => {
      this.page$ = Number(query['page']) || 1;
      this.store.dispatch(fetchBeersListRequest(query));
    });
  }
}
