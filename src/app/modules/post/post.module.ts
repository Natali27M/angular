import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostsService } from './services/posts.services';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsResolver } from './services/resolves/posts.resolver';
import { PostResolver } from './services/resolves/post.resolver';
import { PostGuard } from './services/guards/post.guard';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    PostsResolver,
    PostResolver,
    PostGuard
  ],
})

export class PostModule {

}
