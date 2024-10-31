import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  loginShow: boolean = true;
}
