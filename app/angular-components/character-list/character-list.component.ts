import { Component, OnInit } from '@angular/core';
import { ICharacter } from './../character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  characters: ICharacter[];

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(
      characters => this.characters = characters,
      err => console.error(err)
    );
  }
}
