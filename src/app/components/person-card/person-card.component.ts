import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../models/person.model';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment';

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

  imageLoaded = false;
  prodEnv = environment.production;

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError(event: any) {
    this.imageLoaded = true;
  }

  viewDetails(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.router.navigate(['/person', this.person.id]);
  }

  getPopularityScore(): string {
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
      : this.prodEnv
      ? '/movie-discover-app/no-image.png'
      : '/no-image.png';
  }

  getDefaultImage(): string {
    return this.prodEnv ? '/movie-discover-app/no-image.png' : '/no-image.png';
  }
}
