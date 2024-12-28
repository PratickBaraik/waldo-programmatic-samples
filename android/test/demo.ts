describe('Wikipedia Android - Tutorial', () => {
  it('navigates the app', async () => {
    await driver.tapElement('text', 'SKIP');
    await driver.tapElement('text', 'Search Wikipedia');
    await driver.typeInElement('text', 'Search Wikipedia', 'Alan Turing');
  });
});
