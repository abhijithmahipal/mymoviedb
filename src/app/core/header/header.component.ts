import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public authenticated = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public get isAuthenticated() {
    return this.authenticated;
  }

  public navigateToHome() {
    if (this.isAuthenticated) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['']);
    }
  }
}
