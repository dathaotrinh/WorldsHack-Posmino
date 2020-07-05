import { Component, OnInit, Input } from '@angular/core';
import { DonateService } from 'src/app/shared/donate.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-donate-item',
  templateUrl: './donate-item.component.html',
  styleUrls: ['./donate-item.component.css'],
})
export class DonateItemComponent implements OnInit {
  constructor(private donateService: DonateService, private auth: AuthService, private http:HttpClient) {}
  @Input() list = [];

  ngOnInit(): void {}


  onReceiveItem(itemId: string) {
    const item = this.list.find((element) => element.id === itemId);

    const contributor = item.userID;
    const donee = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    this.auth.fetchUserData(contributor).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendThankyouEmail', res['email'])
        .subscribe();
    });

    this.auth.fetchUserData(donee).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendConfirmEmail', res['email'])
        .subscribe();
    });

    this.donateService.deleteItem(itemId);

  }

  onDonateItem(itemId: string) {
    const item = this.list.find((element) => element.id === itemId);
    const contributor = item.userID;
    const donee = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    this.auth.fetchUserData(contributor).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendThankyouEmail', res['email'])
        .subscribe();
    });

    this.auth.fetchUserData(donee).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendConfirmEmail', res['email'])
        .subscribe();
    });

    console.log(itemId);
    this.donateService.deleteItem(itemId);
  }
}
