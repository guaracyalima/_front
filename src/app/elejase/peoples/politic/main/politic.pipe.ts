import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'politic'
})
export class PoliticPipe implements PipeTransform {

  transform(pol, digitado){
      return pol.filter(politic => politic.politic_name.toLocaleLowerCase().includes(digitado.toLocaleLowerCase()));
  }

}
