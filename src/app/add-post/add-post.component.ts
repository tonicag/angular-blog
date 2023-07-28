import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog';
import { PostsService } from '../posts.service';
import { combineLatest } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public newPost: FormGroup;
  public markdownContent: string =
    '## Heading 2\n\nThis is a **Markdown** example.\n';
  public renderedMarkdown: SafeHtml = '';
  public previewBlogPost: BlogPost = {};

  constructor(
    private sanitizer: DomSanitizer,
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.newPost = this.formBuilder.group({
      title: ['Title', Validators.required],
      content: ['', Validators.required],
    });
  }

  post: Partial<BlogPost> = {
    id: 0,
    title: '',
    content: '',
  };

  ngOnInit(): void {
    this.previewBlogPost = {
      title: 'Title',
      content: 'Content',
    };
    this.renderedMarkdown = this.sanitizer.bypassSecurityTrustHtml(
      marked(this.markdownContent)
    );
  }

  onFormSubmit() {
    if (this.newPost.valid) {
      this.postsService
        .createPost({
          id: 0,
          title: this.newPost.value.title,
          content: this.newPost.value.content,
        })
        .subscribe({
          next: (resp) => {
            console.log('Worked!', resp);
            this.newPost.reset();
            alert('Succesfully added blog post!');
            this.router.navigate([`/post/${resp.id}`]);
          },
          error: (e) => {
            console.log(e);
          },
        });
    } else {
      alert('All fields are mandatory!');
    }
  }
  onInputChange(val: string) {
    console.log(this.previewBlogPost);
    console.log(typeof this.markdownContent);
    this.renderedMarkdown = this.sanitizer.bypassSecurityTrustHtml(
      marked(this.markdownContent)
    );
    this.previewBlogPost.title = this.newPost.value.title;
    this.previewBlogPost.content = this.renderedMarkdown as string;
  }
}
