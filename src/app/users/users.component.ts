import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AbzService as UsersService } from '../abz.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
// export class TooltipOverviewExample {}

export class UsersComponent implements OnInit {
  public page = 1;
  public pagesCount: number;
  public users: Array<User> = [];
  constructor(private usersService: UsersService) { }

  fetchUsers(page) {
    return this.usersService
      .getUsers(page, 6)
      .subscribe((response: any) => {
        this.users = [].concat(this.users, response.users);
        this.pagesCount = response.total_pages;
      });
  }

  clickGetMore() {
    ++this.page;
    return this.fetchUsers(this.page);
  }

  ngOnInit() {
    this.fetchUsers(1);
  }
}
