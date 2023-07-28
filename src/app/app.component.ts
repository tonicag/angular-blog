import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { BlogPost } from './blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public posts: BlogPost[] = [];
  public currentPage: string = 'allPosts';

  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
