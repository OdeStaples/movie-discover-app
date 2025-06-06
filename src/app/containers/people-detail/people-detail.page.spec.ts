import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleDetailPage } from './people-detail.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('PeopleDetailPage', () => {
  let component: PeopleDetailPage;
  let fixture: ComponentFixture<PeopleDetailPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'getPersonDetails',
      'getPersonMovieCredits',
      'getPersonTVCredits',
      'getPersonImages',
      'getImageUrl',
    ]);

    await TestBed.configureTestingModule({
      imports: [PeopleDetailPage],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: '123' }) } },
        { provide: Router, useValue: routerSpy },
        { provide: Location, useValue: locationSpy },
        { provide: MovieService, useValue: movieServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleDetailPage);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockLocation = TestBed.inject(Location) as jasmine.SpyObj<Location>;
    mockMovieService = TestBed.inject(
      MovieService
    ) as jasmine.SpyObj<MovieService>;

    // Mock service methods
    mockMovieService.getPersonDetails.and.returnValue(of({}));
    mockMovieService.getPersonMovieCredits.and.returnValue(
      of({ cast: [], crew: [] })
    );
    mockMovieService.getPersonTVCredits.and.returnValue(
      of({ cast: [], crew: [] })
    );
    mockMovieService.getPersonImages.and.returnValue(of({ profiles: [] }));
    mockMovieService.getImageUrl.and.returnValue('test-url');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
