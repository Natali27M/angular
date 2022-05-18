import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentComponent } from '../../components/comment/comment.component';
import { CommentDetailsComponent } from '../../components/comment-details/comment-details.component';
import { CommentsComponent } from '../../components/comments/comments.component';
import { CommentsService } from 'src/app/services/comments.service';


@NgModule({
  declarations: [
    CommentComponent,
    CommentDetailsComponent,
    CommentsComponent,
  ],

  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],

  providers: [CommentsService]
})
export class CommentsModule { }
