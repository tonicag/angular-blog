import { Component } from '@angular/core';
import { BlogPost } from '../blog';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent {
  public posts: BlogPost[] = [];

  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
