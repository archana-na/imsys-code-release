
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidemenuNavComponent } from './sidemenu-nav.component';

describe('SidemenuNavComponent', () => {
  let component: SidemenuNavComponent;
  let fixture: ComponentFixture<SidemenuNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SidemenuNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
