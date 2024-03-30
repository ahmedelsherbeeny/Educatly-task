import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    BlogPostComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    BlogPostComponent,
    NgxPaginationModule


  ]
})
export class SharedModule { }
