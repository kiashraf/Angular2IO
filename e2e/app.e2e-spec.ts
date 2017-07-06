import { AngularTutorial1Page } from './app.po';

describe('angular-tutorial1 App', () => {
  let page: AngularTutorial1Page;

  beforeEach(() => {
    page = new AngularTutorial1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
