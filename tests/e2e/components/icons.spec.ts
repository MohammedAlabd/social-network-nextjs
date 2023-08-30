import { test, expect } from '@playwright/test';

test('FacebookIcon renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  const facebookIcon = await page.waitForSelector('img[alt="Facebook Icon"]');

  expect(await facebookIcon.isVisible()).toBeTruthy();

  const width = await facebookIcon.getAttribute('width');
  const height = await facebookIcon.getAttribute('height');
  expect(width).toBe('24');
  expect(height).toBe('24');
});

test('TwitterIcon is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  const twitterIcon = await page.waitForSelector('img[alt="Facebook Icon"]');

  const width = await twitterIcon.getAttribute('width');
  const height = await twitterIcon.getAttribute('height');
  expect(width).toBe('24');
  expect(height).toBe('24');
});

test('LinkedInIcon is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  const linkedInIcon = await page.waitForSelector('img[alt="Facebook Icon"]');
  expect(await linkedInIcon.isVisible()).toBeTruthy();

  const width = await linkedInIcon.getAttribute('width');
  const height = await linkedInIcon.getAttribute('height');
  expect(width).toBe('24');
  expect(height).toBe('24');
});

test('EmailIcon is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  const emailIcon = await page.waitForSelector('img[alt="Facebook Icon"]');

  const width = await emailIcon.getAttribute('width');
  const height = await emailIcon.getAttribute('height');
  expect(width).toBe('24');
  expect(height).toBe('24');
});

test('SandwichButton is rendered correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/post-feed');

  const sandwichButton = await page.waitForSelector('img[alt="Facebook Icon"]');

  const width = await sandwichButton.getAttribute('width');
  const height = await sandwichButton.getAttribute('height');
  expect(width).toBe('24');
  expect(height).toBe('24');
});
