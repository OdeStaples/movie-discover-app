import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { SearchItem } from '../../models/search.model';
import { SearchType } from '../../store/search/search.actions';
import { Movie } from '../../models/movie.model';
import { COMPARATORS, MOVIE_CONSTANTS } from '../../constants/movie.constants';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  movieConstants = MOVIE_CONSTANTS;
  comparisionConstants = COMPARATORS;
  searchText = '';
  showDropdown = false;
  selectedIndex = -1;

  @Input({ required: true }) searchType = 'movie';
  @Input() loading: boolean | null = false;
  @Input() movieResults: Movie[] | null = [];
  @Input() actorResults: any[] | null = [];
  @Input() searchResults: SearchItem[] = [];

  @Output() currentSearch = new EventEmitter<string>();
  @Output() searchTypeUpdate = new EventEmitter<SearchType>();
  @Output() onClearSearch = new EventEmitter();
  @Output() selectedItem = new EventEmitter<SearchItem>();
  @Output() redirectHome = new EventEmitter();

  ngOnInit() {
    // Set up debounced search
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait 300ms after user stops typing
        distinctUntilChanged(), // Only emit if value changed
        takeUntil(this.destroy$)
      )
      .subscribe((searchText) => {
        this.currentSearch.emit(searchText);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getContent(): string {
    return `No ${
      this.searchType === this.comparisionConstants.MOVIE
        ? this.comparisionConstants.MOVIES
        : this.comparisionConstants.PEOPLE
    } found for ${this.searchText}`;
  }

  getPlaceholder(): string {
    return this.movieConstants.PLACEHOLDER;
  }

  onSearchTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const searchType = target.value as SearchType;
    this.searchTypeUpdate.emit(searchType);
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.showDropdown = true;
    this.selectedIndex = -1;

    // Trigger debounced search
    this.searchSubject.next(this.searchText);
  }

  clearSearch(): void {
    this.searchText = '';
    this.showDropdown = false;
    this.searchSubject.next(''); // This will trigger the clear
    this.onClearSearch.emit();
  }

  onInputBlur() {
    // Delay hiding dropdown to allow click events on items
    setTimeout(() => {
      this.showDropdown = false;
      this.selectedIndex = -1;
    }, 200);
  }

  onInputFocus() {
    if (this.searchText.length > 0) {
      this.showDropdown = true;
    }
  }

  selectItem(item: SearchItem) {
    this.selectedItem.emit(item);
    this.showDropdown = false;
    this.selectedIndex = -1;
  }

  getItemImage(item: SearchItem): string {
    const imagePath = item.poster_path || item.profile_path;
    return imagePath
      ? `https://image.tmdb.org/t/p/w92${imagePath}`
      : '/movie-discover-app/no-image.png';
  }

  getItemTitle(item: SearchItem): string {
    return item.title || item.name || 'Unknown';
  }

  getItemSubtitle(item: SearchItem): string {
    if (item.type === 'movie') {
      return item.release_date
        ? new Date(item.release_date).getFullYear().toString()
        : 'Unknown Year';
    } else {
      return 'Actor/Director';
    }
  }

  redirectToHome(): void {
    this.redirectHome.emit();
  }
}
