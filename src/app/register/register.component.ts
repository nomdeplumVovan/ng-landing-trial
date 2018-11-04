import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Position } from '../position';
import { AbzService as UsersService } from '../abz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public positions: Array<Position> = [];
  public position: Position;
  public selectedFile: String = 'Upload your photo';


  constructor(private usersService: UsersService) { }

  fetchPositions() {
    return this.usersService
      .getPositions()
      .subscribe((response: any) => {
        this.positions = response.positions;
      });
  }

  ngOnInit() {
    this.fetchPositions();
  }

}
