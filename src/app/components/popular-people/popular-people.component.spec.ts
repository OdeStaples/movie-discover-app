import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularPeopleComponent } from './popular-people.component';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('PopularPeopleComponent', () => {
  let component: PopularPeopleComponent;
  let fixture: ComponentFixture<PopularPeopleComponent>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getPopularPeople',
    ]);

    await TestBed.configureTestingModule({
      imports: [PopularPeopleComponent],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularPeopleComponent);
    component = fixture.componentInstance;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock service methods
    mockMovieService.getPopularPeople.and.returnValue(
      of({ page: 1, total_pages: 1, total_results: 0, results: [] })
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
