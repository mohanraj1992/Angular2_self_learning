import { Ajs2projPage } from './app.po';

describe('ajs2proj App', () => {
  let page: Ajs2projPage;

  beforeEach(() => {
    page = new Ajs2projPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
