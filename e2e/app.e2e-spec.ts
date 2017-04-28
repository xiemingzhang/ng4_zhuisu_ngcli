import { Ng4zhuisuPage } from './app.po';

describe('ng4zhuisu App', () => {
  let page: Ng4zhuisuPage;

  beforeEach(() => {
    page = new Ng4zhuisuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
