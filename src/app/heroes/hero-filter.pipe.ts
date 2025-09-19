import { Pipe, PipeTransform } from '@angular/core';
import {IHeroes} from './heroes';
import { filter } from 'rxjs';

@Pipe({
  name: 'heroFilter',
  standalone: false
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: IHeroes[], arg: string): IHeroes[] {
    let filter:string=arg? arg.toLocaleLowerCase():"";
    return filter? value.filter((heroe:IHeroes)=>heroe.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }
}
