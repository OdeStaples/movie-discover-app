import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailPage } from './movie-detail.page';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('MovieDetailPage', () => {
  let component: MovieDetailPage;
  let fixture: ComponentFixture<MovieDetailPage>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);
    const sanitizerSpy = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl',
    ]);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getImageUrl',
      'getBackdropUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [MovieDetailPage],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ActivatedRoute, useValue: { params: of({ id: '123' }) } },
        { provide: Router, useValue: routerSpy },
        { provide: Location, useValue: locationSpy },
        { provide: DomSanitizer, useValue: sanitizerSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailPage);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockLocation = TestBed.inject(Location) as jasmine.SpyObj<Location>;
    mockSanitizer = TestBed.inject(
      DomSanitizer
    ) as jasmine.SpyObj<DomSanitizer>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock store selectors
    mockStore.select.and.returnValue(of(null));
    mockMovieService.getImageUrl.and.returnValue('test-url');
    mockMovieService.getBackdropUrl.and.returnValue('test-backdrop-url');
    mockSanitizer.bypassSecurityTrustResourceUrl.and.returnValue(
      'safe-url' as any
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
