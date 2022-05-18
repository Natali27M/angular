import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path:'',component:MainLayoutComponent,
  children: [
    { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
    { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
    { path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule) },
    { path: 'todos', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule) },
  ]},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
