import { Component } from '@angular/core';
import {LogowanieComponent} from "../components/logowanie/logowanie.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LogowanieComponent
  ],
  template: `
  <main>
    <header class="brand-name">
        Piotr Grosz 131784
    </header>
    <section class="content">
      <app-logowanie></app-logowanie>
    </section>
  </main>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
