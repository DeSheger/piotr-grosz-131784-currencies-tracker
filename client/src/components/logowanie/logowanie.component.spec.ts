import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule } from '@angular/forms';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], 
    })
      .compileComponents();

    fixture = TestBed.createComponent(LogowanieComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alert "Login successful!" for correct credentials', () => {
    spyOn(window, 'alert');
    component.username = 'test';
    component.password = 'test';
    component.login(); 
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should alert "Invalid credentials!" for correct credentials', () => {
    spyOn(window, 'alert');
    component.username = 'tes';
    component.password = 'test';
    component.login(); 
    expect(window.alert).toHaveBeenCalledWith('Invalid credentials!');
  });
});
