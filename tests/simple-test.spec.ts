import { test, expect } from '@playwright/test';


test('hello team text', async ({ page }) => {
  await page.goto('./');

  const locator =page.locator('h1');

  await expect(locator).toHaveText('hello Team');

});
