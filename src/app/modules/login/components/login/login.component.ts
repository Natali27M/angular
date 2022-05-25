import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup | any;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(): void {
    this.authService.login(this.form.getRawValue()).subscribe(value => {
      this.authService.setToken(value);
      this.router.navigate(['cars']).then();
    })
  }

}
