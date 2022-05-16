import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CommentComponent,
    CommentsComponent,
    PostComponent,
    PostsComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
