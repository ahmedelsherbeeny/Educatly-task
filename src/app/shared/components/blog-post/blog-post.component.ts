import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/models/blogPosts';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  @Input() data!:BlogPost

  
  postDetails(url:string){
    
    window.open(url, '_blank');
  }

}
