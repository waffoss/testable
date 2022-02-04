import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { selectCatsData } from 'src/app/store/cats/cats.selectors';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  catFact$ = this.store.select(selectCatsData);

  constructor(private store: Store){}

  ngOnInit(): void {
    
  }
 
}
