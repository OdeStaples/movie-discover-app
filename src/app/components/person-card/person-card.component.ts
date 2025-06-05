import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../models/person.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-person-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
})
export class PersonCardComponent {
  private router = inject(Router);
  public movieService = inject(MovieService);

  @Input() person!: Person;
  @Input() showQuickActions = true;

  faStar = faStar;
  faPlay = faPlay;
  faUser = faUser;

  // Component state
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: any) {
    this.imageLoaded = true;
    // Fallback image will be handled by onerror attribute
  }

  viewDetails(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.router.navigate(['/person', this.person.id]);
  }

  getPopularityScore(): string {
    // Convert popularity to a simpler 1-10 scale
    return Math.min(10, Math.round(this.person.popularity / 10)).toString();
  }

  getTruncatedKnownFor(): string {
    if (!this.person.known_for || this.person.known_for.length === 0) return '';
    const knownForTitles = this.person.known_for
      .slice(0, 2)
      .map((item) => item.title || item.name)
      .join(', ');
    return knownForTitles.length > 50
      ? knownForTitles.substring(0, 50) + '...'
      : knownForTitles;
  }

  getPersonImage(): string {
    return this.person.profile_path
      ? `https://image.tmdb.org/t/p/w342${this.person.profile_path}`
      : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiIGZpbGw9IiMzQTNBM0EiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjYwIiByPSIyNSIgZmlsbD0iIzY2NjY2NiIvPjxwYXRoIGQ9Ik0zMCAxMjBDMzAgMTA1IDUwIDk1IDc1IDk1Uzk1IDEwNSAxMjAgMTIwIiBmaWxsPSIjNjY2NjY2Ii8+PC9zdmc+';
  }
}
