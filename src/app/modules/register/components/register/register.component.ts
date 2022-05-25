import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form: FormGroup | any;

  constructor() {

  }

  ngOnInit(): void {

  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null)
    })
  }

  register(): void {
    console.log(this.form);
  }

}
