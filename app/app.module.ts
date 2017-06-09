import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { CharactersModule } from './angular-components/characters.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    CharactersModule
  ]
})
export class AppModule {
  ngDoBootstrap() {
    // Required module bootstrap method
  }
}
