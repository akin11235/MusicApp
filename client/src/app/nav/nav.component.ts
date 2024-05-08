import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  title = 'web304-a2';
  public searchString: string | undefined;
  model: any = {};

  constructor(private router: Router, public accountService: AccountService) {}

  ngOnInit(): void {}

  handleSearch() {
    this.router.navigate(['search'], {
      queryParams: { q: `${this.searchString}`, type: 'artist', limit: '50' },
    });
    this.searchString = '';
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
