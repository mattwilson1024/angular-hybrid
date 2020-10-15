# Angular Hybrid Example

## This repo is not maintained!

⚠️ Please note that I created this repo some time ago when I was migrating a legacy app from Angular 1.x to Angular (the latest was v4 at the time). It's not something I plan to maintain or update and I am not sure how much of this will apply or work for more recent versions of Angular, but I'll keep it here for now as a historical reference. 

## What is this?

This is an example Hybrid AngularJS & Angular app. 

In this example, we bootstrap using NgUpgrade. 

- The outer most page (the CharactersPage) is provided by AngularJS (1.6).
- The page contains CharacterListComponent, which is a downgraded Angular (4) component.
- The CharacterListComponent uses another Angular 4 component, CharacterDetail component. This is passed in as an input.
