import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsService } from './services/comments.service';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentsResolver } from './services/resolves/comments.resolver';
import { CommentResolver } from './services/resolves/comment.resolver';
import { CommentGuard } from './services/guards/comment.guard';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService,
    CommentsResolver,
    CommentResolver,
    CommentGuard
  ]
})

export class CommentModule {

}
