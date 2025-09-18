import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {

  imageWidth:number=100;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listfilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }
  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/Krilin_Universo7.webp",
      nombre:"Krillin",
      description:'Es Krillin',
      race:"Human",
      ki:"1,000,000"
    },
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:'Es Goku',
      race:"Saiyan",
      ki:"60.000.000"
    },
    {
      imagen:"https://dragonball-api.com/characters/Jiren.webp",
      nombre:"Jiren",
      description:'Es Jiren',
      race:"Grises",
      ki:"121 Quintillion"
    },
    {
      imagen:"https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
      nombre:"Broly",
      description:'Es Broly',
      race:"Saiyan",
      ki:"7 quadrillion"
    }
  ]

}
