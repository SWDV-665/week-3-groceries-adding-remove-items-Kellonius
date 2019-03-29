import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  toggle(item: any) {
    item.purchased = !item.purchased
  }

  async delete(item: any) {
    const toast = await this.toastController.create({
      message: "Removing item: " + item.Name + ", " + item.Type,
      duration: 3000
    })

    toast.present();

    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  async addItem() {
    const alert = await this.alertController.create({
      subHeader: 'Add Item',
      message: 'Please add an item.',
      inputs: [
        {
          name: 'itemName',
          type: 'text',
          placeholder: 'Name of item, e.g. "apples"'
        },
        {
          name: 'itemType',
          type: 'text',
          placeholder: 'Type of item, e.g. "granny smith'
        }],
      buttons: [{
        text: "Add",
        handler: data => {
          this.items.push({ Name: data.itemName, Type: data.itemType, src: "/assets/404.jpg", purchased: false })
        }
      }, 
      {
        text: "Cancel"
      }]
    });

    alert.present();
  }
}
