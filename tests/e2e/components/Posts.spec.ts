import { test, expect } from '@playwright/test';

test('Posts are rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  await page.waitForSelector('.space-y-4');

  const postList = await page.$$('.space-y-4 > div');

  expect(postList.length).toBeGreaterThan(0);
});
