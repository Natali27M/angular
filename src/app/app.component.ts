import { Component, DoCheck, OnInit, OnDestroy, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

import { InnerComponent } from './componets/inner/inner.component';

// import { IUser } from './interface/user.interface';
// import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked {

  // user: IUser;
  // // user: IUser;
  //
  // constructor(private dataService: DataService) {
  //   this.dataService.storage.subscribe(value => this.user = value)
  // }

  title = 'sep-2021';

  @ViewChild(InnerComponent)
  inner: InnerComponent;

  constructor() {
    console.log('constructor');
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('on changes')
  // }

  ngOnInit() {
    console.log('on init');
  }
  ngDoCheck(){
    console.log('do check')
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngAfterViewChecked() {
    console.log(this.inner.asd);
  }
  ngAfterViewInit() {
    console.log(this.inner.asd);
  }

  changeTitle() {
    this.title = 'New title';
  }

  // catch(user: IUser) {
  //   this.user = user;
  // }

}
