import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../../components/header/header.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';
import { MovieGridComponent } from '../../components/movie-grid/movie-grid.component';
import { WatchlistSectionComponent } from '../../components/watchlist-section/watchlist-section.component';
import { PopularPeopleComponent } from '../../components/popular-people/popular-people.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    HeaderComponent,
    CommonModule,
    HeroComponent,
    MovieGridComponent,
    WatchlistSectionComponent,
    PopularPeopleComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(WatchlistActions.loadWatchlist());
  }
}
