import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
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

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    HeaderComponent,
    CommonModule,
    HeroComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnDestroy, AfterViewInit {
  private store = inject(Store);
  private destroy$ = new Subject<void>();
  private router = inject(Router);
  searchLoading$ = this.store.select(SearchSelectors.selectSearchLoading);
  movieResults$ = this.store.select(SearchSelectors.selectMovieResults);
  actorResults$ = this.store.select(SearchSelectors.selectActorResults);
  currentSearchType: SearchType = 'movie';
  currentSearchText = '';
  searchResults: SearchItem[] = [];

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
    console.log('Current Search Type ->', searchType);
    this.updateSearchInput(this.currentSearchText);
  }

  updateSearchInput(searchText: string): void {
    this.currentSearchText = searchText;
    // Only search if there's actual text
    if (searchText.trim().length > 0) {
      if (this.currentSearchType.toLowerCase() === 'person') {
        this.store.dispatch(SearchActions.searchPeople({ query: searchText }));
      } else {
        this.store.dispatch(SearchActions.searchMovies({ query: searchText }));
      }
    } else {
      // Clear results if search is empty
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
      // For people, you could navigate to a person detail page
      // Or show a modal with their filmography
      console.log('Selected person:', item);
      // this.router.navigate(['/person', item.id]);
    }
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
