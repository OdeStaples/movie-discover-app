import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, forkJoin } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faUser,
  faExclamationTriangle,
  faArrowLeft,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-people-detail',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './people-detail.page.html',
  styleUrl: './people-detail.page.scss',
})
export class PeopleDetailPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  public movieService = inject(MovieService);
  private destroy$ = new Subject<void>();
  prodEnv = environment.production;

  faStar = faStar;
  faUser = faUser;
  faExclamationTriangle = faExclamationTriangle;
  faArrowLeft = faArrowLeft;
  faExternalLink = faExternalLink;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  person: any = null;
  movieCredits: any = null;
  tvCredits: any = null;
  personImages: any = null;
  loading = false;
  error = false;
  personId: number | null = null;
  activeTab = 'overview';
  showFullBio = false;

  showAllMovies = false;
  showAllTV = false;
  showAllImages = false;

  movieCreditFilter: 'all' | 'cast' | 'crew' = 'all';
  tvCreditFilter: 'all' | 'cast' | 'crew' = 'all';

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = +params['id'];
      if (id && !isNaN(id)) {
        this.personId = id;
        this.loadPersonDetails(id);
      } else {
        this.error = true;
      }
    });
  }

  private loadPersonDetails(personId: number): void {
    this.loading = true;
    this.error = false;

    forkJoin({
      person: this.movieService.getPersonDetails(personId),
      movieCredits: this.movieService.getPersonMovieCredits(personId),
      tvCredits: this.movieService.getPersonTVCredits(personId),
      images: this.movieService.getPersonImages(personId),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.person = data.person;
          this.movieCredits = data.movieCredits;
          this.tvCredits = data.tvCredits;
          this.personImages = data.images;
          this.loading = false;
          this.error = false;
        },
        error: (error) => {
          console.error('Error loading person details:', error);
          this.loading = false;
          this.error = true;
        },
      });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  setMovieCreditFilter(filter: 'all' | 'cast' | 'crew'): void {
    this.movieCreditFilter = filter;
    this.showAllMovies = false;
  }

  setTVCreditFilter(filter: 'all' | 'cast' | 'crew'): void {
    this.tvCreditFilter = filter;
    this.showAllTV = false;
  }

  toggleShowAllMovies(): void {
    this.showAllMovies = !this.showAllMovies;
  }

  toggleShowAllTV(): void {
    this.showAllTV = !this.showAllTV;
  }

  toggleShowAllImages(): void {
    this.showAllImages = !this.showAllImages;
  }

  openImageModal(imagePath: string): void {
    const fullImageUrl = this.movieService.getImageUrl(imagePath, 'original');
    window.open(fullImageUrl, '_blank');
  }

  navigateToMovie(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }

  goBack(): void {
    this.location.back();
  }

  getAge(): string | null {
    if (!this.person?.birthday) return null;

    const birthDate = new Date(this.person.birthday);
    const deathDate = this.person.deathday
      ? new Date(this.person.deathday)
      : new Date();
    const age = deathDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = deathDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && deathDate.getDate() < birthDate.getDate())
    ) {
      return (age - 1).toString();
    }

    return age.toString();
  }

  getTruncatedBiography(): string {
    if (!this.person?.biography) return '';
    const maxLength = 300;
    return this.person.biography.length > maxLength
      ? this.person.biography.substring(0, maxLength) + '...'
      : this.person.biography;
  }

  formatBiography(biography: string): string {
    if (!biography) return '';
    return biography
      .split('\n\n')
      .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  getPersonPhotoUrl(): string {
    return this.person?.profile_path
      ? this.movieService.getImageUrl(this.person.profile_path, 'w500')
      : this.prodEnv
      ? '/movie-discover-app/no-image.png'
      : '/no-image.png';
  }

  getKnownForBackdrop(): string | null {
    const knownFor = this.person?.known_for;
    if (!knownFor || knownFor.length === 0) return null;

    const itemWithBackdrop = knownFor
      .filter((item: any) => item.backdrop_path)
      .sort((a: any, b: any) => (b.popularity || 0) - (a.popularity || 0))[0];

    return itemWithBackdrop
      ? this.movieService.getImageUrl(itemWithBackdrop.backdrop_path, 'w1280')
      : null;
  }

  getTopKnownFor(): any[] {
    if (!this.person?.known_for) return [];
    return this.person.known_for
      .sort((a: any, b: any) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 5);
  }

  getKnownForImageUrl(posterPath: string): string {
    return posterPath
      ? this.movieService.getImageUrl(posterPath, 'w154')
      : this.prodEnv
      ? '/movie-discover-app/no-image.png'
      : '/no-image.png';
  }

  getMovieCredits(): any[] {
    const cast = this.movieCredits?.cast || [];
    const crew = this.movieCredits?.crew || [];
    return [...cast, ...crew].sort((a, b) => {
      const dateA = a.release_date ? new Date(a.release_date).getTime() : 0;
      const dateB = b.release_date ? new Date(b.release_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getMovieCreditsByCast(): any[] {
    return (this.movieCredits?.cast || []).sort((a: any, b: any) => {
      const dateA = a.release_date ? new Date(a.release_date).getTime() : 0;
      const dateB = b.release_date ? new Date(b.release_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getMovieCreditsByCrew(): any[] {
    return (this.movieCredits?.crew || []).sort((a: any, b: any) => {
      const dateA = a.release_date ? new Date(a.release_date).getTime() : 0;
      const dateB = b.release_date ? new Date(b.release_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getFilteredMovieCredits(): any[] {
    switch (this.movieCreditFilter) {
      case 'cast':
        return this.getMovieCreditsByCast();
      case 'crew':
        return this.getMovieCreditsByCrew();
      default:
        return this.getMovieCredits();
    }
  }

  getDisplayedMovieCredits(): any[] {
    const credits = this.getFilteredMovieCredits();
    return this.showAllMovies ? credits : credits.slice(0, 12);
  }

  getTVCredits(): any[] {
    const cast = this.tvCredits?.cast || [];
    const crew = this.tvCredits?.crew || [];
    return [...cast, ...crew].sort((a, b) => {
      const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : 0;
      const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getTVCreditsByCast(): any[] {
    return (this.tvCredits?.cast || []).sort((a: any, b: any) => {
      const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : 0;
      const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getTVCreditsByCrew(): any[] {
    return (this.tvCredits?.crew || []).sort((a: any, b: any) => {
      const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : 0;
      const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : 0;
      return dateB - dateA;
    });
  }

  getFilteredTVCredits(): any[] {
    switch (this.tvCreditFilter) {
      case 'cast':
        return this.getTVCreditsByCast();
      case 'crew':
        return this.getTVCreditsByCrew();
      default:
        return this.getTVCredits();
    }
  }

  getDisplayedTVCredits(): any[] {
    const credits = this.getFilteredTVCredits();
    return this.showAllTV ? credits : credits.slice(0, 12);
  }

  getPersonImages(): any[] {
    return this.personImages?.profiles || [];
  }

  getDisplayedImages(): any[] {
    const images = this.getPersonImages();
    return this.showAllImages ? images : images.slice(0, 8);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getDefaultImage(): string {
    return this.prodEnv ? '/movie-discover-app/no-image.png' : '/no-image.png';
  }
}
