import { Component } from '@angular/core';
  
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {
  
  id!: number;
  post!: Post;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
          
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  
}