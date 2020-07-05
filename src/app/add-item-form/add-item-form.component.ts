import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonateService } from '../shared/donate.service';
import { UUID } from 'angular2-uuid';
import { Item } from '../shared/item.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent implements OnInit {
  private itemLink = 'https://posmino.firebaseio.com/items.json';
  list: Item[] = [];
  listChanged = new Subject<Item[]>();

  constructor(private dialog: MatDialog, private donateService: DonateService, private http: HttpClient) {}

  // onSubmitSignup(form: NgForm) {
  //   // this.donateService.addItem(form);

  //   console.log(form);
  //   const userID = localStorage
  //     .getItem('key')
  //     .substring(1, localStorage.getItem('key').length - 1);
  //   const itemId = UUID.UUID();
  //   const newItem = new Item(
  //     form.value.name,
  //     itemId,
  //     form.value.image,
  //     form.value.type,
  //     userID,
  //     false,
  //     form.value.lastname,
  //     typeof form.value.description === 'undefined'
  //       ? ''
  //       : form.value.description
  //   );
  //   this.list.push(newItem);
  //   this.listChanged.next(this.list);
  //   this.http.post(this.itemLink, newItem).subscribe();
  // }

  isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated =
      typeof localStorage.getItem('key') !== 'undefined' ? true : false;
  }

  onSubmitSignup(form: NgForm) {
    this.donateService.addItem(form);
  }

  onClose() {
    this.dialog.closeAll();
  }
}
