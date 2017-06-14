var CharactersPage = require('./characters.page-object');

describe('characters page', function () {

  var page = new CharactersPage();

  beforeEach(function () {
    page.get();
  });

  it('should show a Characters title', function () {
    expect(page.header.isDisplayed()).toBeTruthy();
    expect(page.header.getText()).toEqual('Characters');
  });

});
