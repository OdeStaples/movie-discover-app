import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getBackdropUrl',
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [HeroComponent, HttpClientTestingModule],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock store selectors with specific handling for different selectors
    mockStore.select.and.callFake((selector: any) => {
      // Mock popular movies selector
      if (
        selector &&
        (selector.toString().includes('selectPopularMovies') ||
          selector === jasmine.any(Function))
      ) {
        return of([]);
      }
      // Mock loading selectors
      if (selector && selector.toString().includes('Loading')) {
        return of(false);
      }
      // Default fallback
      return of([]);
    });

    mockMovieService.getBackdropUrl.and.returnValue('test-url');
    mockMovieService.getImageUrl.and.returnValue('test-url');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
