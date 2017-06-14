var CharactersPage = function () {
  this.header = element(by.css('h1'));
  this.characters = element.all(by.css('app-character-detail'));
};

CharactersPage.prototype.get = function () {
  browser.get('index.html');
};

module.exports = CharactersPage;
