import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlogPostsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,

  ]
})
export class PagesModule { }
