import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentGuard } from './services/guards/comment.guard';
import { CommentsResolver } from './services/resolves/comments.resolver';
import { CommentResolver } from './services/resolves/comment.resolver';

const routes: Routes = [
  { path: '', component: CommentsComponent,
    resolve: {
      commentsData: CommentsResolver
    },
    canDeactivate: [CommentGuard],
    canActivate: [CommentGuard],

    children: [
      {
        path: ':id', component: CommentDetailsComponent,
        resolve: {
          commentData: CommentResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommentRoutingModule {

}
