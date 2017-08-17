import { FormsAppPage } from './app.po';

describe('forms-app App', () => {
  let page: FormsAppPage;

  beforeEach(() => {
    page = new FormsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
