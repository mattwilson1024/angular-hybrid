import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  entryComponents: [
    CharacterListComponent,
    CharacterDetailComponent
  ]
})
export class CharactersModule {
  ngDoBootstrap() {
    // Required module bootstrap method
  }
}
