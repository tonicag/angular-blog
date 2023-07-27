import { Injectable, OnInit } from '@angular/core';
import { BlogPost } from './blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of} from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnInit{

  private url = 'http://localhost:3000/posts';
  posts: BlogPost[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    
   }
  ngOnInit()
  {
    this.getPosts().subscribe((posts) => this.posts = posts);
  }
  getPosts(): Observable<BlogPost[]> {
    console.log('Here');
    const posts = this.http.get<BlogPost[]>(this.url);
    console.log(posts);
    return posts;
  }
  getPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.url}/${id}`).pipe(
      
    );
  }
  createPost(post: BlogPost) {
    post.date = new Date();
    return this.http.post<BlogPost>(this.url,post,this.httpOptions).pipe(
      tap((newPost:BlogPost) => console.log(newPost.content))
    );
  }
}
