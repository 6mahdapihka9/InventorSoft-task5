import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPokemonComponent } from './app-pokemon.component';

describe('AppPokemonComponent', () => {
  let component: AppPokemonComponent;
  let fixture: ComponentFixture<AppPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
