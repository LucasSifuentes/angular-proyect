import { Component } from '@angular/core';
import { PrComponent } from '../pr/pr.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [ PrComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

}
