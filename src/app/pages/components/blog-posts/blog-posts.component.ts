import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject,takeUntil  } from 'rxjs';
import { BlogPost } from 'src/app/models/blogPosts';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit,OnDestroy {

  unsubscribe$:Subject<boolean>=new Subject();
  blogPostsData!:BlogPost[]
  isLoading$!:Observable<boolean>
  page: any = 1
  limit!:number





  constructor(private blogPostService:BlogPostsService,private loader:LoaderService,private message:MessageService){}


  
 
  ngOnInit(): void {
    this.getBlogPosts()
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().pipe(takeUntil(this.unsubscribe$)).subscribe((res:BlogPost[])=>{

// res=[] => here we test the case where no data is present
      if(res.length !==0){
        
        this.loader.show()
        this.limit=8

        this.blogPostsData=res
        this.message.toast("Posts Loaded Seccessfully","success")
      }else{
        this.loader.hide()

        this.message.popup("Sorry!","No Data to Show","warning",()=>{
          this.getBlogPosts()
        })

      }
      
    },(err)=>{
      this.loader.hide()
      this.message.popup("Sorry!",err.error.error,"error",()=>{
        this.getBlogPosts()
      })
      


    })


  
  }

  

  ngOnDestroy(): void {
    this.unsubscribe$.next(true)
  }


}
