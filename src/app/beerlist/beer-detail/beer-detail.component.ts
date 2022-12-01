import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DrinksState } from 'src/app/store';
import { fetchBeerRequest } from 'src/app/store/beers.action';
import { getBeerDetailSelector } from 'src/app/store/beers.selectors';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  public beerDetail$!: Observable<any>;
  public id$!: number;

  constructor(
    private store: Store<DrinksState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.beerDetail$ = this.store.pipe(select(getBeerDetailSelector));
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.id$ = id;
      this.store.dispatch(fetchBeerRequest(id));
    });
  }
}
