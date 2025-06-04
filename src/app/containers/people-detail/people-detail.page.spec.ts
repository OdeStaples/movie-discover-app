import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailPage } from './people-detail.page';

describe('PeopleDetailPage', () => {
  let component: PeopleDetailPage;
  let fixture: ComponentFixture<PeopleDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
