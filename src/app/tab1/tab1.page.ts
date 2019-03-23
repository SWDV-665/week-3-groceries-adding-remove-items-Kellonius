import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [{ Name: "Apples", Type: "Granny Smith", src: "/assets/apples.jpg", purchased: false },
  { Name: "Bananas", Type: "Yellow", src: "/assets/bananas.jpg", purchased: false },
  { Name: "Blueberries", Type: "Highbush", src: "/assets/blueberry.jpg", purchased: false },
  { Name: "Strawberries", Type: "June Bearing", src: "/assets/strawberry.jpg", purchased: false }
  ]
  
  toggle(item:any){
    item.purchased = !item.purchased
  }

  delete(item:any) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    } 
  }
}
