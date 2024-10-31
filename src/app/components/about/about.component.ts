import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  face: string = 'https://scontent.fcor9-1.fna.fbcdn.net/v/t1.6435-9/51323363_2334528726779778_3999748303683059712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=6cbCknON640Q7kNvgGcdT9n&_nc_ht=scontent.fcor9-1.fna&oh=00_AYBHCp4PiXi0hcJqTAM0QK6hXCoMoXi8-9qHaxuZiKSqvQ&oe=6720CFB4';
}
