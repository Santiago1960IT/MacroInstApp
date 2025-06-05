import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPpal } from './menu-ppal';

describe('MenuPpal', () => {
  let component: MenuPpal;
  let fixture: ComponentFixture<MenuPpal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPpal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPpal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
