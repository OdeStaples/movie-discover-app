import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchlistSectionComponent } from './watchlist-section.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('WatchlistSectionComponent', () => {
  let component: WatchlistSectionComponent;
  let fixture: ComponentFixture<WatchlistSectionComponent>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [WatchlistSectionComponent],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistSectionComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock store selectors
    mockStore.select.and.returnValue(of([]));
    mockMovieService.getImageUrl.and.returnValue('test-url');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
