import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';
import { FormsModule } from '@angular/forms';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Keep FormsModule here if your component uses forms
    })
      // No need to declare standalone components or import them here
      .compileComponents();

    fixture = TestBed.createComponent(LogowanieComponent); // This automatically handles standalone components
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should alert "Login successful!" for correct credentials', () => {
    spyOn(window, 'alert');
    component.username = 'test';
    component.password = 'test';
    component.login(); // Assuming login doesn't need event argument
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should alert "Invalid credentials!" for correct credentials', () => {
    spyOn(window, 'alert');
    component.username = 'tes';
    component.password = 'test';
    component.login(); // Assuming login doesn't need event argument
    expect(window.alert).toHaveBeenCalledWith('Invalid credentials!');
  });
});
