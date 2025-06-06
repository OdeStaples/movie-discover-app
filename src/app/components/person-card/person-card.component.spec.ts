import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonCardComponent } from './person-card.component';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [PersonCardComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Set required input
    component.person = {
      id: 1,
      name: 'Test Person',
      profile_path: '/test.jpg',
      known_for_department: 'Acting',
      popularity: 85.5,
      known_for: [],
    };

    mockMovieService.getImageUrl.and.returnValue('test-url');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
