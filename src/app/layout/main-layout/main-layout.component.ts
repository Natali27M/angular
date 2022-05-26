import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})

export class MainLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    if(this.authService.isAuthorization()) {
      this.router.navigate(['cars']).then();
    }
  }

}
