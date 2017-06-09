import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: any;

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

export const CharactersNg1Module = angular
  .module('example.characters', [])
  .directive('appCharacterList', downgradeComponent({component: CharacterListComponent}) as angular.IDirectiveFactory)
  .directive('appCharacterDetail', downgradeComponent({component: CharacterDetailComponent}) as angular.IDirectiveFactory)
  .name;
