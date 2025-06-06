import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as SearchSelectors from './store/search/search.selectors';
import { CommonModule } from '@angular/common';
import { SearchType } from './store/search/search.actions';
import * as SearchActions from './store/search/search.actions';
import { SearchItem } from './models/search.model';
import { HeaderComponent } from './components/header/header.component';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private store = inject(Store);
  private destroy$ = new Subject<void>();
  private router = inject(Router);
  searchLoading$ = this.store.select(SearchSelectors.selectSearchLoading);
  movieResults$ = this.store.select(SearchSelectors.selectMovieResults);
  actorResults$ = this.store.select(SearchSelectors.selectActorResults);
  currentSearchType: SearchType = 'movie';
  currentSearchText = '';
  searchResults: SearchItem[] = [];

  faBug = faBug;
  faGithub = faGithub;

  ngAfterViewInit(): void {
    combineLatest([this.movieResults$, this.actorResults$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([movies, actors]) => {
        if (this.currentSearchType === 'movie') {
          this.searchResults = movies.map((movie) => ({
            ...movie,
            type: 'movie' as const,
          }));
        } else {
          this.searchResults = actors.map((actor) => ({
            ...actor,
            type: 'person' as const,
          }));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateSearchType(searchType: SearchType) {
    this.currentSearchType = searchType;
    this.updateSearchInput(this.currentSearchText);
  }

  updateSearchInput(searchText: string): void {
    this.currentSearchText = searchText;
    if (searchText.trim().length > 0) {
      if (this.currentSearchType.toLowerCase() === 'person') {
        this.store.dispatch(SearchActions.searchPeople({ query: searchText }));
      } else {
        this.store.dispatch(SearchActions.searchMovies({ query: searchText }));
      }
    } else {
      this.store.dispatch(SearchActions.clearSearchResults());
    }
  }

  clearSearch(): void {
    this.currentSearchText = '';
    this.store.dispatch(SearchActions.clearSearchResults());
  }

  navigateToSelection(item: SearchItem): void {
    if (item.type === 'movie') {
      this.router.navigate(['/movie', item.id]);
    } else {
      this.router.navigate(['/person', item.id]);
    }
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
