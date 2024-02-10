import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine.model';
import { WineService } from '../services/wine-service';

@Component({
  selector: 'app-create-wine',
  templateUrl: './create-wine.component.html',
  styleUrls: ['./create-wine.component.css']
})
export class CreateWineComponent implements OnInit {
  item!: Wine;

  constructor(private wineService: WineService){}

  ngOnInit(){
    this.item = {
      id: 0,
      name: '',
      smallDescription: '',
      description: '',
      capacity: '',
      price: 0,
      color: '',
      type: '',
      imageUrl: '' // You may want to provide a default image URL or handle image upload separately
    }; 
   }

   onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.item.imageBlob = file;
  }

   createWine() : any {
    console.log(this.item);
    this.wineService.createWine(this.item).subscribe(result => {
      console.log("Success", result);
    },
    error => {
      console.log("Error", error);
    })
   }
}
