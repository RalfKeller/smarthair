import { SmarthairPage } from './app.po';

describe('smarthair App', () => {
  let page: SmarthairPage;

  beforeEach(() => {
    page = new SmarthairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
