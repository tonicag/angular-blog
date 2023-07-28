import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { BlogPost } from './blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: BlogPost[] = [];
  currentPage: string = 'allPosts';
  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
