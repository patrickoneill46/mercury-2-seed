import { Mercury2Page } from './app.po';

describe('mercury-2 App', function() {
  let page: Mercury2Page;

  beforeEach(() => {
    page = new Mercury2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
