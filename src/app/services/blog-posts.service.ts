import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogPosts';


@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  // public baseURL=`https://dev.to/api/articles/jhgg`  => we can use this to test error cases 
  public baseURL=`https://dev.to/api/articles`


  constructor(private http:HttpClient) { }


  getBlogPosts(): Observable<BlogPost[]> { 
    return this.http.get<BlogPost[]>(this.baseURL); 
  }

 
}
