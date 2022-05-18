import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from '../../components/post/post.component';
import { PostDetailsComponent } from '../../components/post-details/post-details.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { PostsService } from '../../services';


@NgModule({
  declarations: [
    PostComponent,
    PostDetailsComponent,
    PostsComponent,
  ],

  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
