import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user';
import { Position } from '../position';
import { AbzService as UsersService } from '../abz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public positions: Array<Position> = [];
  user: User = new User;
  position: Position;
  public selectedFile: any = 'Upload your photo';
  selectedPosition: any = 'Select your position ';

  myForm: FormGroup;
  // myForm = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //   userEmail: new FormControl('', [Validators.required,
  //   Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]),

  //   userPhone: new FormControl('', [Validators.required,
  //   Validators.pattern('^[\+]{0,1}380([0-9]{9})$')]),

  //   userPositionId: new FormControl('', Validators.required),
  //   userPhoto: new FormControl('', Validators.required)
  // });

  photoControl = new FormControl;
  filename: any;

  constructor(private usersService: UsersService) { }



  registerUser() {
  }


  fetchPositions() {
    return this.usersService
      .getPositions()
      .subscribe((response: any) => {
        this.positions = response.positions;
      });
  }

  onPhotoChange() {
    this.filename = this.photoControl.value;
    if (this.filename !== null) {
      console.log(this.filename);
      return this.selectedFile = this.filename.replace(/.*\\/, '');
    }
  }
  onPositionChange() {
   this.selectedPosition = '';
  }

  uploadImage() {
    return this.onPhotoChange();
  }

  onSubmit() {
    console.log(this.myForm);
  }
  ngOnInit() {
    this.fetchPositions();
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required,
      Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]),

      userPhone: new FormControl('', [Validators.required,
      Validators.pattern('^[\+]{0,1}380([0-9]{9})$')]),

      userPosition: new FormControl(),
      userPhoto: new FormControl()
    });

  }

}
