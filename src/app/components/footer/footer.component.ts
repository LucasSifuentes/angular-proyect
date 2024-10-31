import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
