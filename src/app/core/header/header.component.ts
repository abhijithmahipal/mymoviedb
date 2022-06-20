import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('close-modal', { static: false }) closeModal:
    | ElementRef
    | undefined;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {}

  public navigateToHome(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['']);
    }
  }

  public async signInWithGoogle(): Promise<void> {
    await this.authService.login();
    document.getElementById('close-modal')?.click();
    this.navigateToHome();
  }

  public async logout() {
    await this.authService.logout();
    this.router.navigate(['']);
  }
}
