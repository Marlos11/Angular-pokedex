import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent}from '../app/components/card/card.component'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,FormsModule],
  template: `
 <app-card></app-card>
 
  <router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}
