import { Content } from "./content-interface";
export class contentList {
   private items: Content[];
   static contentcount=0;


   constructor(item: Content){
    this.items = [];
}

get():Content[] {
    return this.items;
    
}
public add(item:Content):void{
    this.items.push(item);
}

count():number {
    return this.items.length;
}

displayAtIndex(index: number) {
    // check if the index is valid
    if (index < 0 || index >= this.items.length) {
        alert("Invalid index");
    }
    // get the content item at the given index
    const item = this.items[index];

    // return the item in reader-friendly HTML format
    return `<h2>${item.title}</h2>
            <p>${item.description}</p>
            <p>By ${item.creator}</p>
            <img src="${item.imgURL}" alt="${item.title}">
            <p>Type: ${item.type}</p>`;
}

}