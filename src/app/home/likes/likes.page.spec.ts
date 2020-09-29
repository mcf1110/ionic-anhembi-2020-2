import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LikesPage } from './likes.page';

describe('LikesPage', () => {
  let component: LikesPage;
  let fixture: ComponentFixture<LikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
