import { test, expect } from '@playwright/test';

test('CreatPost component renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  await page.waitForSelector('.rounded-lg');

  const avatarImage = await page.waitForSelector('img[alt="Landscape picture"]');
  const closeButton = await page.waitForSelector('button[type="button"]');
  const postButton = await page.waitForSelector('button[type="button"].btn');

  await expect(avatarImage).toBeTruthy();
  await expect(closeButton).toBeTruthy();
  await expect(postButton).toBeTruthy();
});
