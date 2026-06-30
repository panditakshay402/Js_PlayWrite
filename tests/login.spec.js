const { test, expect } = require('@playwright/test');

test('Verify successful login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');
});


test('Select dropdown option 1', async ({ page }) => {

  await page.goto('/dropdown');

  await page.locator('#dropdown')
            .selectOption('1');

  await expect(page.locator('#dropdown'))
      .toHaveValue('1');

});