import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieCardComponent } from './movie-card.component';
import { MovieService } from '../../services/movie.service';
import { mockMovie, mockMovie2 } from '../../mocks/app.mock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import * as WatchlistActions from '../../store/watchlist/watchlist.actions';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let debugElement: DebugElement;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [MovieCardComponent, FontAwesomeModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: Store, useValue: storeSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    mockStore.select.and.returnValue(of(false));
    mockMovieService.getImageUrl.and.returnValue(
      'http://example.com/poster.jpg'
    );
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      component.movie = mockMovie;
      expect(component).toBeTruthy();
    });

    it('should initialize with default values', () => {
      component.movie = mockMovie;
      expect(component.showQuickActions).toBe(true);
      expect(component.imageLoaded).toBe(false);
      expect(component.isInWatchlist).toBe(false);
    });

    it('should throw error if movie is not provided', () => {
      expect(() => {
        fixture.detectChanges();
      }).toThrow();
    });
  });

  describe('Input Properties', () => {
    it('should accept movie input', () => {
      component.movie = mockMovie;
      expect(component.movie).toEqual(mockMovie);
    });

    it('should accept showQuickActions input', () => {
      component.movie = mockMovie;
      component.showQuickActions = false;
      expect(component.showQuickActions).toBe(false);
    });

    it('should handle different movie objects', () => {
      component.movie = mockMovie2;
      expect(component.movie).toEqual(mockMovie2);
    });
  });

  describe('NgOnInit', () => {
    beforeEach(() => {
      component.movie = mockMovie;
    });

    it('should check if movie is in watchlist on init', () => {
      mockStore.select.and.returnValue(of(true));

      component.ngOnInit();

      expect(mockStore.select).toHaveBeenCalled();
      expect(component.isInWatchlist).toBe(true);
    });

    it('should update isInWatchlist when store value changes', () => {
      mockStore.select.and.returnValue(of(false));

      component.ngOnInit();

      expect(component.isInWatchlist).toBe(false);
    });
  });

  describe('Image Handling', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should call onImageLoad when image loads', () => {
      spyOn(component, 'onImageLoad');

      const imgElement = debugElement.query(By.css('.movie-poster'));
      imgElement.nativeElement.dispatchEvent(new Event('load'));

      expect(component.onImageLoad).toHaveBeenCalled();
    });

    it('should set imageLoaded to true on load', () => {
      component.onImageLoad();
      expect(component.imageLoaded).toBe(true);
    });

    it('should set imageLoaded to true on error', () => {
      const mockEvent = { target: { src: 'fallback.jpg' } };
      component.onImageError(mockEvent);
      expect(component.imageLoaded).toBe(true);
    });

    it('should get movie image URL from service', () => {
      const result = component.getMovieImage();
      expect(mockMovieService.getImageUrl).toHaveBeenCalledWith(
        mockMovie.poster_path
      );
      expect(result).toBe('http://example.com/poster.jpg');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should navigate to movie details when viewDetails is called', () => {
      component.viewDetails();
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/movie',
        mockMovie.id,
      ]);
    });

    it('should prevent event propagation when called with event', () => {
      const mockEvent = {
        preventDefault: jasmine.createSpy('preventDefault'),
        stopPropagation: jasmine.createSpy('stopPropagation'),
      };

      component.viewDetails(mockEvent as any);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith([
        '/movie',
        mockMovie.id,
      ]);
    });
  });

  describe('Watchlist Actions', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should dispatch toggleWatchlist action', () => {
      component.toggleWatchlist(new Event('click') as any);

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        WatchlistActions.toggleWatchlist({ movie: mockMovie })
      );
    });

    it('should prevent event propagation when toggling watchlist', () => {
      const mockEvent = {
        preventDefault: jasmine.createSpy('preventDefault'),
        stopPropagation: jasmine.createSpy('stopPropagation'),
      };

      component.toggleWatchlist(mockEvent as any);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('Helper Methods', () => {
    beforeEach(() => {
      component.movie = mockMovie;
    });

    it('should return correct movie year', () => {
      const year = component.getMovieYear();
      expect(year).toBe('2023');
    });

    it('should return "Unknown" for missing release date', () => {
      component.movie = { ...mockMovie, release_date: '' };
      const year = component.getMovieYear();
      expect(year).toBe('Unknown');
    });

    it('should truncate long overview', () => {
      const longOverview = 'A'.repeat(150);
      component.movie = { ...mockMovie, overview: longOverview };

      const truncated = component.getTruncatedOverview();
      expect(truncated.length).toBeLessThanOrEqual(123);
      expect(truncated.endsWith('...')).toBe(true);
    });

    it('should return full overview if short enough', () => {
      const shortOverview = 'Short overview';
      component.movie = { ...mockMovie, overview: shortOverview };

      const result = component.getTruncatedOverview();
      expect(result).toBe(shortOverview);
    });

    it('should return empty string for missing overview', () => {
      component.movie = { ...mockMovie, overview: '' };
      const result = component.getTruncatedOverview();
      expect(result).toBe('');
    });
  });

  describe('Template Rendering', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      component.showQuickActions = true;
      fixture.detectChanges();
    });

    it('should display movie title', () => {
      const titleElement = debugElement.query(By.css('.movie-title'));
      expect(titleElement.nativeElement.textContent.trim()).toBe(
        mockMovie.title
      );
    });

    it('should display movie year', () => {
      const metaElement = debugElement.query(By.css('.movie-meta'));
      expect(metaElement.nativeElement.textContent).toContain('2023');
    });

    it('should display rating badge', () => {
      const ratingElement = debugElement.query(By.css('.rating-badge'));
      expect(ratingElement.nativeElement.textContent).toContain('8.5');
    });

    it('should show quick actions overlay on desktop', () => {
      const overlayElement = debugElement.query(
        By.css('.quick-actions-overlay')
      );
      expect(overlayElement).toBeTruthy();
    });

    it('should hide quick actions when showQuickActions is false', () => {
      component.showQuickActions = false;
      fixture.detectChanges();

      const overlayElement = debugElement.query(
        By.css('.quick-actions-overlay')
      );
      expect(overlayElement).toBeFalsy();
    });

    it('should show mobile watchlist heart', () => {
      const heartElement = debugElement.query(By.css('.watchlist-heart'));
      expect(heartElement).toBeTruthy();
    });

    it('should show genres if available', () => {
      const movieWithGenres = {
        ...mockMovie,
        genres: [
          { id: 1, name: 'Action' },
          { id: 2, name: 'Drama' },
        ],
      };
      component.movie = movieWithGenres;
      fixture.detectChanges();

      const genresElement = debugElement.query(By.css('.genres'));
      expect(genresElement).toBeTruthy();
      expect(genresElement.nativeElement.textContent).toContain('Action');
    });

    it('should display loading overlay when image not loaded', () => {
      component.imageLoaded = false;
      fixture.detectChanges();

      const loadingElement = debugElement.query(By.css('.loading-overlay'));
      expect(loadingElement).toBeTruthy();
    });

    it('should hide loading overlay when image loaded', () => {
      component.imageLoaded = true;
      fixture.detectChanges();

      const loadingElement = debugElement.query(By.css('.loading-overlay'));
      expect(loadingElement).toBeFalsy();
    });
  });

  describe('Watchlist Visual States', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should show filled heart when movie is in watchlist', () => {
      component.isInWatchlist = true;
      fixture.detectChanges();

      const heartButtons = debugElement.queryAll(By.css('button fa-icon'));
      expect(heartButtons.length).toBeGreaterThan(0);
    });

    it('should show outline heart when movie is not in watchlist', () => {
      component.isInWatchlist = false;
      fixture.detectChanges();

      const heartButtons = debugElement.queryAll(By.css('button fa-icon'));
      expect(heartButtons.length).toBeGreaterThan(0);
    });

    it('should change button styles based on watchlist status', () => {
      component.isInWatchlist = true;
      fixture.detectChanges();

      const watchlistButton = debugElement.query(
        By.css('.quick-actions-overlay button:last-child')
      );
      expect(watchlistButton.nativeElement.classList).toContain('btn-danger');
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should have proper alt text for movie poster', () => {
      const imgElement = debugElement.query(By.css('.movie-poster'));
      expect(imgElement.nativeElement.alt).toBe(mockMovie.title);
    });

    it('should have proper title attributes for buttons', () => {
      const viewButton = debugElement.query(
        By.css('.quick-actions-overlay button:first-child')
      );
      const watchlistButton = debugElement.query(
        By.css('.quick-actions-overlay button:last-child')
      );

      expect(viewButton.nativeElement.title).toBe('View Details');
      expect(watchlistButton.nativeElement.title).toContain('Watchlist');
    });

    it('should have proper loading state accessibility', () => {
      component.imageLoaded = false;
      fixture.detectChanges();

      const spinnerElement = debugElement.query(By.css('.spinner-border'));
      const visuallyHidden = debugElement.query(By.css('.visually-hidden'));

      expect(spinnerElement.nativeElement.getAttribute('role')).toBe('status');
      expect(visuallyHidden.nativeElement.textContent).toBe('Loading...');
    });
  });

  describe('Responsive Behavior', () => {
    beforeEach(() => {
      component.movie = mockMovie;
      fixture.detectChanges();
    });

    it('should show mobile view details button', () => {
      const mobileButton = debugElement.query(By.css('.d-md-none'));
      expect(mobileButton).toBeTruthy();
      expect(mobileButton.nativeElement.textContent.trim()).toBe('');
    });

    it('should handle mobile watchlist interaction', () => {
      const mobileHeart = debugElement.query(By.css('.watchlist-heart button'));

      mobileHeart.nativeElement.click();

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        WatchlistActions.toggleWatchlist({ movie: mockMovie })
      );
    });
  });

  describe('Error Handling', () => {
    it('should handle missing movie properties gracefully', () => {
      const incompleteMovie = {
        id: 1,
        title: 'Test Movie',
      };

      component.movie = incompleteMovie as any;

      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should handle undefined movie genres', () => {
      component.movie = { ...mockMovie, genres: undefined };

      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });
  });

  describe('Performance', () => {
    beforeEach(() => {
      component.movie = mockMovie;
    });

    it('should not cause memory leaks', () => {
      fixture.detectChanges();

      expect(() => {
        fixture.destroy();
      }).not.toThrow();
    });

    it('should handle rapid interaction changes', () => {
      fixture.detectChanges();

      for (let i = 0; i < 10; i++) {
        component.toggleWatchlist(new Event('click') as any);
      }

      expect(mockStore.dispatch).toHaveBeenCalledTimes(10);
    });

    it('should render efficiently', () => {
      const startTime = performance.now();
      fixture.detectChanges();
      const endTime = performance.now();

      expect(endTime - startTime).toBeLessThan(100);
    });
  });
});
