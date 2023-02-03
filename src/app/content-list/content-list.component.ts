import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {

@Input() content: Content; 

constructor() {
  this.content = {
    id: 1, 
    title: "Overwatch", 
    description: "first person shooter", 
    creator: "Blizzard", 
    imgURL: "https://www.seekpng.com/png/detail/345-3459933_small-gray-overwatch-logo-overwatch-standard-edition-cd.png",
    type: "PC", 
    tags: ["overwatch"]

  };
}

ngOnInit(): void {
  }


imgText() {
  console.log("URL: " + this.content.imgURL + "Title:" + this.content.title); 
}  

}
