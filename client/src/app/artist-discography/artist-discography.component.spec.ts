import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDiscographyComponent } from './artist-discography.component';

describe('ArtistDiscographyComponent', () => {
  let component: ArtistDiscographyComponent;
  let fixture: ComponentFixture<ArtistDiscographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistDiscographyComponent]
    });
    fixture = TestBed.createComponent(ArtistDiscographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
