import { Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({ required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({ required: true}) id!: string ;
  // @Input({ required: true}) avatar!: string ;
  // @Input({ required: true}) name!: string ;
  @Output() select = new EventEmitter();

  //select = output<string>();

  get imagePath()
  {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser()
  {
    this.select.emit(this.user.id);
  }

  // avatar = input.required();
  // name = input.required();

  // imagePath =  computed(() =>{
  //   return 'assets/users/' + this.avatar();
  // });
 
}
