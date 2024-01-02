import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
