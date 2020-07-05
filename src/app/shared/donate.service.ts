import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../shared/item.model';
import { NgForm } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonateService {
  private itemLink = 'https://posmino.firebaseio.com/items.json';
  list: Item[] = [];
  listChanged = new Subject<Item[]>();

  constructor(private http: HttpClient) {}

  addItem(form: NgForm) {
    const userID = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    const itemId = UUID.UUID();
    const newItem = new Item(
      form.value.name,
      itemId,
      form.value.image,
      form.value.type,
      userID,
      false,
      form.value.lastname,
      form.value.description
    );
    this.list.push(newItem);
    this.listChanged.next(this.list);
    this.http.post(this.itemLink, newItem).subscribe();
  }

  fetchList() {
    return this.http.get<ItemInterface[]>(this.itemLink).pipe(
      map((data) => {
        const keys = Object.keys(data);
        return keys.map((key) => data[key]);
      })
    );
  }


  deleteItem(id: string) {
    this.http.get<ItemInterface[]>(this.itemLink).subscribe((data) => {
      console.log(data);
      const keys = Object.keys(data);
      keys.forEach((key) => {
        if (data[key]['id'] === id) {
          this.http
            .delete(
              'https://posmino.firebaseio.com/items/' + key + '.json'
            )
            .subscribe();
        }
      });
    });
  }
}

export interface ItemInterface {
  name: string;
  id: string;
  image: string;
  type: string;
  userID: string;
  isDone: boolean;
  username: string;
  description: string;
}
