import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colaborator'
})
export class ColaboratorPipe implements PipeTransform {

  transform(colaborators, digitado){
      return colaborators.filter(colaborator => colaborator.name.toLocaleLowerCase().includes(digitado.toLocaleLowerCase()));
  }

}
