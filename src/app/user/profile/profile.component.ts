import { Component, OnInit } from '@angular/core';
import { IbankUser } from 'src/app/auth/model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  ibankUser: IbankUser | null = null;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.ibankUser = this.userService.userValue
  }
}
