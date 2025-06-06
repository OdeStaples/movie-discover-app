import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Store } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getPopularMovies',
      'getBackdropUrl',
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [HomePage, HttpClientTestingModule],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock store selectors
    mockStore.select.and.returnValue(of([]));
    mockMovieService.getPopularMovies.and.returnValue(
      of({ results: [], page: 0, total_pages: 0, total_results: 0 })
    );
    mockMovieService.getBackdropUrl.and.returnValue('test-backdrop-url');
    mockMovieService.getImageUrl.and.returnValue('test-image-url');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
