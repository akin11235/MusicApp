import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [],
})
export class SidenavComponent {
  title = 'web304-a2';
  public searchString: string | undefined;

  constructor(private router: Router) {}
  handleSearch() {
    this.router.navigate(['search'], {
      queryParams: { q: `${this.searchString}`, type: 'artist', limit: '50' },
    });
    this.searchString = '';
  }
}
