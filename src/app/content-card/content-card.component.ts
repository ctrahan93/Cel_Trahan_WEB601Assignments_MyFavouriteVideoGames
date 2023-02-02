import { Component, OnInit } from '@angular/core';
import { contentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {



  item1: Content = {
    id:1,
    title:"Overwatch", 
    description:"first person shooter", 
    creator:"blizard",
    type:"PC"
  }

  item2: Content = {
    id:2,
    title:"Raft", 
    description:"multi-player", 
    creator:"Axolot Games",
    type:"PC"
  }

  item3: Content = {
    id:3,
    title:"Stardew Valley", 
    description:"multi-player", 
    creator:"Concerned Ape",
    type:"PC"
  }

  myContent = new contentList(this.item1)
  contentList = this.myContent.get();

  constructor() {
    this.myContent.add(this.item1);
    this.myContent.add(this.item2);
    this.myContent.add(this.item3); 
  }


ngOnInit(): void {
  const content = document.getElementById('content-card');
  console.log(content);
  if(content) {
    content.innerHTML += this.myContent.displayAtIndex(0);
    content.innerHTML += this.myContent.displayAtIndex(1);
    content.innerHTML += this.myContent.displayAtIndex(2);
 
  }
  }

}
