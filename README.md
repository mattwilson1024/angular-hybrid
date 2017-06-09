# Angular Hybrid Example

This is an example Hybrid AngularJS & Angular app. 

In this example, we bootstrap using NgUpgrade. 

- The outer most page (the CharactersPage) is provided by AngularJS (1.6).
- The page contains CharacterListComponent, which is a downgraded Angular (4) component.
- The CharacterListComponent uses another Angular 4 component, CharacterDetail component. This is passed in as an input.
