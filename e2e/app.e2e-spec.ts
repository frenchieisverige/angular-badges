import { AngularBadgesPage } from './app.po';

describe('angular-badges App', () => {
  let page: AngularBadgesPage;

  beforeEach(() => {
    page = new AngularBadgesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
