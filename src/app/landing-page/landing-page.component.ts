import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['home']);
    }
  }
}
