import { test } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('my first testcase', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await homePage.open();
  await homePage.expectTitle();
});