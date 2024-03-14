import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'test' && this.password === 'test') {
      alert('Login successful!');
      // Here you can redirect the user to another component or perform other actions upon successful login
    } else {
      alert('Invalid credentials!');
    }
  }
}
