import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';


@NgModule({
  declarations: [
    BlogPostsComponent,
    BlogPostDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
