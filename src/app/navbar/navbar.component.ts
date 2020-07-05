import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../shared/auth.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;
  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false: true;
    })  }

  openLogin() {
    this.dialog.open(SignInComponent);
  }

  openPopup() {
    this.dialog.open(NotificationComponent);
  }

}
