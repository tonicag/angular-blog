import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input()
  post: BlogPost = {
    title: "This is the title"
  };

  @Input()
  preview?: string;

  @Input()
  buttonDisabled: boolean = false;
  constructor(private sanitizer: DomSanitizer)
  {
    
  }
  formatDateAndTime(date: Date): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Get the day of the week (0 - 6) and the time (HH:mm)
    const dayOfWeek = daysOfWeek[date.getDay()];
    const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  
    // Return the formatted string
    return `${dayOfWeek}, ${time}`;
  }
  ngOnInit(): void {
    if(this.post && this.post.content)
    {
      this.post.content = this.sanitizer.bypassSecurityTrustHtml(marked(this.post.content)) as string;
    }
  }
}
