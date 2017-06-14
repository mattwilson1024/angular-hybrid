import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICharacter } from './character';

@Injectable()
export class CharactersService {
  constructor(private http: Http) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.http
      .get('https://raw.githubusercontent.com/mattwilson1024/angular-hybrid/master/characters.json')
      .map(response => response.json() as ICharacter[]);
  }
}
