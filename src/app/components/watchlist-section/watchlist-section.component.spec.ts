import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistSectionComponent } from './watchlist-section.component';

describe('WatchlistSectionComponent', () => {
  let component: WatchlistSectionComponent;
  let fixture: ComponentFixture<WatchlistSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchlistSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
