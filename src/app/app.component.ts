import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./shared/nav/nav.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CanonicalService } from "./shared/canonical.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mulata';

  private canonical = inject(CanonicalService);

  ngOnInit(): void {
    // Keeps rel=canonical and og:url pointing at the page actually being viewed.
    this.canonical.init();
  }
}
