import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/model/user.model';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ListAccountService } from '../../services/list-account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent extends BaseComponent<User> implements OnInit {


  listAccount: User[] = [];

    constructor(private listService: ListAccountService) {
      super(listService);
    }


  ngOnInit(): void {
    this.listService.getAll().subscribe(list => {
      this.listAccount = list.items;
    });
  }





}
