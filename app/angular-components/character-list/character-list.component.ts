import { ICharacter } from './../character';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  characters: ICharacter[] = [
    {
      name: 'Homer Simpson',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
      name: 'Marge Simpson',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
    },
    {
      name: 'Bart Simpson',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
    },
    {
      name: 'Lisa Simpson',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
    },
    {
      name: 'Maggie Simpson',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
    }
  ];
}
