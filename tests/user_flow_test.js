Feature('*** USER FLOW ***');

Scenario('all pages', ({ I }) => {
  I.amOnPage('/');

  I.see('또 다시 말해요');
});
