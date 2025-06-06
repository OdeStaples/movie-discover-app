import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieGridComponent } from './movie-grid.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('MovieGridComponent', () => {
  let component: MovieGridComponent;
  let fixture: ComponentFixture<MovieGridComponent>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    await TestBed.configureTestingModule({
      imports: [MovieGridComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieGridComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;

    // Mock store selectors
    mockStore.select.and.returnValue(of(null));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
