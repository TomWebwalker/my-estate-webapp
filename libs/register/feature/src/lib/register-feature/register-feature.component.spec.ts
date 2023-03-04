import { ComponentFixture, TestBed } from '@angular/core/testing';

import RegisterFeatureComponent from './register-feature.component';
import { RegisterGQL } from 'app-graphql';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class RegisterGQLMock {}

describe('RegisterFeatureComponent', () => {
  let component: RegisterFeatureComponent;
  let fixture: ComponentFixture<RegisterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFeatureComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: RegisterGQL,
          useClass: RegisterGQLMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
