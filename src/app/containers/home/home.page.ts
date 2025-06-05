import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../../components/header/header.component';
import { Store } from '@ngrx/store';
import * as SearchSelectors from '../../store/search/search.selectors';
import { CommonModule } from '@angular/common';
import { SearchType } from '../../store/search/search.actions';
import * as SearchActions from '../../store/search/search.actions';
import { SearchItem } from '../../models/search.model';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { HeroComponent } from '../../components/hero/hero.component';
import * as MovieActions from '../../store/movies/movies.actions';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';
import { MovieGridComponent } from '../../components/movie-grid/movie-grid.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    HeaderComponent,
    CommonModule,
    HeroComponent,
    MovieGridComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    // Optionally, restore previous search state or fetch initial data
    // For now, clear any previous search results on init
    this.store.dispatch(WatchlistActions.loadWatchlist());
    // this.store.dispatch(SearchActions.clearSearchResults());
  }
}
