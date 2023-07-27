import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {path:'',redirectTo: 'allPosts',pathMatch: 'full'},
  {path: 'newPost', component: AddPostComponent},
  {path: 'allPosts', component: AllPostsComponent},
  {path: 'post/:id', component: DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }