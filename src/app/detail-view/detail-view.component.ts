import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogPost } from '../blog';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  post: BlogPost = {};
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postsService: PostsService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(id).subscribe((e) => (this.post = e));
  }
}
