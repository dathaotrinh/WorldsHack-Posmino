import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { DonateService } from 'src/app/shared/donate.service';
import { NotiService } from 'src/app/shared/noti.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  errorMessage = '';
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private donateService: DonateService,
    private notiService: NotiService
  ) {}

  ngOnInit(): void {}

  openSignup() {
    this.dialog.open(SignUpComponent);
  }

  onSubmitLogin(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      this.errorMessage = 'Please fill in the required fields.';
    } else {
      this.authService
        .loginUser(form.value.email, form.value.password)
        .subscribe(
          (res) => {
            localStorage.setItem('key', JSON.stringify(res.localId));
            // this.notiService.fetchNoti();
            this.dialog.closeAll();
            this.router.navigate(['/home']);
          },
          (error) => {
            this.errorMessage = error.error.error.message;
          }
        );
      this.donateService.fetchList();
    }
  }
}
