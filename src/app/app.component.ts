import { Component } from '@angular/core';
import {Content} from '../app/helper-files/content-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Item1: Content = {
    id: 1, 
    title: "Overwatch", 
    description: "First-person shooter", 
    creator: "Blizzard", 
    imgURL: "https://portforward.com/cdn-cgi/mirage/8064ced7c4eb2633fff5ec8d2bc0564ab8a02c0fb345178dc00e8a90a464c21a/1280/overwatch-2/overwatch-2-header-small.webp",
    type: "PC", 
    tags: ["Overwatch"]
};

Item2: Content = {
  id: 2, 
  title: "Raft", 
  description: "Multi-player", 
  creator: "Axolot", 
  imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/648800/capsule_616x353.jpg?t=1655744208",
  type: "PC", 
  tags: ["Raft"]
};

Item3: Content = {
  id: 3, 
  title: "Stardew Valley", 
  description: "Multi-player", 
  creator: "ConcernedApe", 
  imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466",
  type: "PC", 
  tags: ["Stardew"]
};

Item4: Content = {
  id: 4, 
  title: "Terraria", 
  description: "Multi-player", 
  creator: "Re-Logic", 
  imgURL: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1664397885",
  type: "PC", 
  tags: ["Terraria"]
};

Item5: Content = {
  id: 5, 
  title: "It Takes Two", 
  description: "Multi-player", 
  creator: "Electronic Arts", 
  imgURL: "https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/08/games-like-It-Takes-Two.jpg",
  type: "PC", 
  tags: ["It Takes Two"]
};

Item6: Content = {
  id: 6, 
  title: "Ori and the Will of the Wisps", 
  description: "single-player", 
  creator: "Moon Studios", 
  imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/1057090/capsule_616x353.jpg?t=1667504225",
  type: "PC", 
  tags: ["Ori"]
};

contentArray: Content[];

constructor() {
  this.contentArray = [this.Item1]; 

  this.contentArray.push(this.Item1);
  this.contentArray.push(this.Item2);
  this.contentArray.push(this.Item3);
  this.contentArray.push(this.Item4);
  this.contentArray.push(this.Item5);
  this.contentArray.push(this.Item6);
  
}

} 