import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/auth.service';
import { NotiService } from 'src/app/shared/noti.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage = "";
  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitSignup(form: NgForm) {
    if (form.valid) {
      this.authService.signupNewUser(form.value.email, form.value.password)
        .subscribe(res => {
          localStorage.setItem('key', JSON.stringify(res.localId));
          this.authService.storeUserData(form, res.localId)
            .subscribe();
            // this.notiService.fetchNoti();

          this.dialog.closeAll();
          this.router.navigate(['/home']);
        },
          error => {
            this.errorMessage = error.error.error.message;
          })
    }
  }

}
