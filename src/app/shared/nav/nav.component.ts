import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isScrolled = false;

  @HostListener('window:scroll',[])
    onWindowScroll(){
      this.isScrolled = window.scrollY > 50;
    }
}
