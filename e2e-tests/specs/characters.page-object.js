var CharactersPage = function () {
  this.header = element(by.css('h1'));
};

CharactersPage.prototype.get = function () {
  browser.get('index.html');
};

module.exports = CharactersPage;
