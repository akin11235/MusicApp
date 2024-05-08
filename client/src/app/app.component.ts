
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'web304-a2';
  public searchString: string | undefined;

  constructor(private router: Router, private accountService: AccountService) {}
  ngOnInit(): void {
    this.setCurrentUser();
  }

  handleSearch() {
    this.router.navigate(['search'], {
      queryParams: { q: `${this.searchString}`, type: 'artist', limit: '50' },
    });
    this.searchString = '';
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
