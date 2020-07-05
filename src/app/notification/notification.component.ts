import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../shared/item.model';
import { NotiService } from '../shared/noti.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  noti: Item[] = []
  constructor(private notiSerivce: NotiService) { }

  ngOnInit(): void {
    // this.noti = this.notiSerivce.getAllNoti();
  }
}
