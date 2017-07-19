import { MyNgappPage } from './app.po';

describe('my-ngapp App', () => {
  let page: MyNgappPage;

  beforeEach(() => {
    page = new MyNgappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
