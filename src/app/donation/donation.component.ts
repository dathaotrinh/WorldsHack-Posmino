import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { DonateService, ItemInterface } from '../shared/donate.service';
import { Item } from '../shared/item.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  list: Item[] = [];

  constructor(
    private dialog: MatDialog,
    private donateService: DonateService
  ) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemFormComponent, {
      data: this.list,
    });
  }

  fetchItems() {
    this.donateService.fetchList().subscribe((res) => {
      this.list = res;
    });
  }
}
