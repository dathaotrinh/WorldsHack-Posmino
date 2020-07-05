import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotiService } from './shared/noti.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonationComponent } from './donation/donation.component';
import { HttpClientModule } from '@angular/common/http';
import { DonateService } from './shared/donate.service';
import { AuthService } from './shared/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DonateItemComponent } from './donation/donate-item/donate-item.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DonationComponent,
    DonateItemComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ContactComponent,
    AddItemFormComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [DonateService, AuthService, NotiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
