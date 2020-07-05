import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotiService {
  noti: Item[] = [];
  notiChanged = new Subject<Item[]>();


  constructor(private http: HttpClient) {}

  // addNoti(item: Item) {
  //   this.noti.push(item);
  //   if (typeof localStorage.getItem('key') !== 'object') {
  //     const saveLink =
  //       'https://posmino.firebaseio.com/users/' +
  //       localStorage
  //         .getItem('key')
  //         .substring(1, localStorage.getItem('key').length - 1) +
  //       '.json';
  //     this.http
  //       .patch(saveLink, {
  //         noti: this.noti,
  //       })
  //       .subscribe((res) => {
  //         console.log(res);
  //       });
  //   }
  //   this.notiChanged.next(this.noti);
  // }



  // fetchNoti() {
  //   if (typeof localStorage.getItem('key') !== 'object') {
  //     const saveLink =
  //       'https://posmino.firebaseio.com/users/' +
  //       localStorage
  //         .getItem('key')
  //         .substring(1, localStorage.getItem('key').length - 1) +
  //       '/noti.json';
  //     this.http
  //       .get<Item[]>(saveLink)
  //       .subscribe((res) => {
  //         this.noti.push(...res);
  //         this.notiChanged.next(this.noti);
  //       });
  //     }
  // }

  // getAllNoti(): Item[] {
  //   return this.noti;
  // }
}
