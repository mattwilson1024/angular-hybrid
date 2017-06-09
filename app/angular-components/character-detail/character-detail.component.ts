import { Component, Input } from '@angular/core';
import { ICharacter } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styles: [require('./character-detail.component.css').toString()]
})
export class CharacterDetailComponent {
  @Input() character: ICharacter;
}
