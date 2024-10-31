import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeroComponent } from "../hero/hero.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, HeroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
urlImg: string = 'https://images.pexels.com/photos/15267862/pexels-photo-15267862/free-photo-of-vista-aerea-de-arboles-montanas-y-un-cuerpo-de-agua-bajo-un-cielo-azul.jpeg';
photo: string = `url('${this.urlImg}')`;
urlVideo: string = 'https://videos.pexels.com/video-files/10130349/10130349-hd_1920_1080_30fps.mp4';
}
