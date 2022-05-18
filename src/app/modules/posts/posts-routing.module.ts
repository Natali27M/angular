import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailsComponent } from 'src/app/components/post-details/post-details.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
