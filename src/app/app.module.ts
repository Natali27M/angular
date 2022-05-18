import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodosComponent } from './components/todos/todos.component';
import { MainLayoutComponent } from './layouts/main-layout';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentDetailsComponent,
    CommentsComponent,
    HeaderComponent,
    PostComponent,
    PostDetailsComponent,
    PostsComponent,
    TodoComponent,
    TodoDetailsComponent,
    TodosComponent,
    MainLayoutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  exports: [],

  bootstrap: [AppComponent]
})

export class AppModule {

}
