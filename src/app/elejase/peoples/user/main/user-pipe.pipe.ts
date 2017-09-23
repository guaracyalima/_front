import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {

  transform(users, digitado){
    console.log('uzerus',users)
      return users.filter(user => user.name.toLocaleLowerCase().includes(digitado.toLocaleLowerCase()));
  }

}
