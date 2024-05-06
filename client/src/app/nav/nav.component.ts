import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent {
  title = 'web304-a2';
  public searchString: string | undefined;
  model: any = {};

  constructor(private router: Router) {}
  handleSearch() {
    this.router.navigate(['search'], {
      queryParams: { q: `${this.searchString}`, type: 'artist', limit: '50' },
    });
    this.searchString = '';
  }

  login() {
    console.log(this.model);
  }
}
