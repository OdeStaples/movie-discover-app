import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../models/person.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-popular-people',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './popular-people.component.html',
  styleUrl: './popular-people.component.scss',
})
export class PopularPeopleComponent implements OnInit, OnDestroy {
  private movieService = inject(MovieService);
  private destroy$ = new Subject<void>();

  faUser = faUser;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faStar = faStar;

  // Component state
  people: Person[] = [];
  loading = false;
  error = false;
  currentIndex = 0;
  itemsPerView = 6;
  scrollOffset = 0;

  ngOnInit() {
    this.loadPeople();
    this.updateItemsPerView();
    window.addEventListener('resize', () => this.updateItemsPerView());
  }

  loadPeople() {
    this.loading = true;
    this.error = false;

    // Using TMDB API to get popular people
    this.movieService.getPopularPeople().subscribe({
      next: (response) => {
        this.people = response.results.slice(0, 20); // Take first 20 people
        this.loading = false;
        this.error = false;
      },
      error: (error) => {
        console.error('Error loading popular people:', error);
        this.loading = false;
        this.error = true;
      },
    });
  }

  get visiblePeople(): Person[] {
    return this.people.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerView
    );
  }

  get maxIndex(): number {
    return Math.max(0, this.people.length - this.itemsPerView);
  }

  get currentPage(): number {
    return Math.floor(this.currentIndex / this.itemsPerView);
  }

  get scrollPages(): number[] {
    const totalPages = Math.ceil(this.people.length / this.itemsPerView);
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerView);
      this.updateScrollOffset();
    }
  }

  scrollRight() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex = Math.min(
        this.maxIndex,
        this.currentIndex + this.itemsPerView
      );
      this.updateScrollOffset();
    }
  }

  goToPage(pageIndex: number) {
    this.currentIndex = pageIndex * this.itemsPerView;
    this.updateScrollOffset();
  }

  private updateScrollOffset() {
    const cardWidth = window.innerWidth <= 768 ? 156 : 196; // includes margin
    this.scrollOffset = -this.currentIndex * cardWidth;
  }

  private updateItemsPerView() {
    const width = window.innerWidth;
    if (width <= 576) {
      this.itemsPerView = 2;
    } else if (width <= 768) {
      this.itemsPerView = 3;
    } else if (width <= 1200) {
      this.itemsPerView = 4;
    } else {
      this.itemsPerView = 6;
    }
    this.updateScrollOffset();
  }

  getPersonImage(profilePath: string): string {
    return profilePath
      ? `https://image.tmdb.org/t/p/w185${profilePath}`
      : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiMzQTNBM0EiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzY2NjY2NiIvPjxwYXRoIGQ9Ik0zMCAxMjBDMzAgMTA1IDUwIDk1IDc1IDk1Uzk1IDEwNSAxMjAgMTIwIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+';
  }

  getPopularityScore(popularity: number): string {
    // Convert popularity to a simpler 1-10 scale
    return Math.min(10, Math.round(popularity / 10)).toString();
  }

  getKnownForTitle(item: any): string {
    return item.title || item.name || 'Unknown';
  }

  viewPersonDetails(personId: number) {
    // For now, just log the person ID
    // You can implement a person detail page later
    console.log('View person details:', personId);
    // this.router.navigate(['/person', personId]);
  }

  viewAllPeople() {
    // Navigate to a dedicated people page or show modal
    console.log('View all people');
    // this.router.navigate(['/people']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('resize', () => this.updateItemsPerView());
  }
}
