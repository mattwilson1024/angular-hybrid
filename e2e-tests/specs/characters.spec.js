var CharactersPage = require('./characters.page-object');

describe('characters page', function () {

  var page = new CharactersPage();

  beforeEach(function () {
    page.get();
  });

  it('should show a header and 5 characters', function () {
    expect(page.header.isDisplayed()).toBeTruthy();
    expect(page.header.getText()).toEqual('Characters');
    expect(page.characters.count()).toEqual(5);
  });

});
