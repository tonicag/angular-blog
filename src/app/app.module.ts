import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    AddPostComponent,
    AllPostsComponent,
    DetailViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
