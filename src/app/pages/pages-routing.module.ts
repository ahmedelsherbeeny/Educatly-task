import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BlogPostsComponent }, // Add route for BlogPostsComponent
      // Add more routes if needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
