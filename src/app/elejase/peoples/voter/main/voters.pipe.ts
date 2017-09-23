import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteres'
})
export class VotersPipe implements PipeTransform {

  transform(voters, digitado){
      return voters.filter(voter => voter.name.toLocaleLowerCase().includes(digitado.toLocaleLowerCase()));
  }

}
