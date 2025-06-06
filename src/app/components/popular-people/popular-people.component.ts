import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../models/person.model';
import { MovieService } from '../../services/movie.service';
import { PersonCardComponent } from '../person-card/person-card.component';

@Component({
  selector: 'app-popular-people',
  imports: [CommonModule, FontAwesomeModule, PersonCardComponent],
  templateUrl: './popular-people.component.html',
  styleUrl: './popular-people.component.scss',
})
export class PopularPeopleComponent implements OnInit, OnDestroy {
  private movieService = inject(MovieService);
  private destroy$ = new Subject<void>();

  faUser = faUser;

  // Component state
  people: Person[] = [];
  loading = false;
  error = false;
  showAll = false;

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.loading = true;
    this.error = false;

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

  get displayedPeople(): Person[] {
    if (this.showAll) {
      return this.people;
    }
    return this.people.slice(0, 6); // Show first 6 people by default
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll;

    if (this.showAll) {
      // Scroll to ensure all people are visible
      setTimeout(() => {
        const element = document.querySelector('.popular-people-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  getSectionSubtitle(): string {
    const peopleCount = this.people.length;
    const displayCount = this.displayedPeople.length;

    return `${peopleCount} trending actors, directors, and creators${
      !this.showAll && peopleCount > 6 ? ` (showing ${displayCount})` : ''
    }`;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
