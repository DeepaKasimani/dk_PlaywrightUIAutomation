import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('dialog', { name: 'Voordat je verdergaat naar' }).press('ArrowUp');
  await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- heading "Voordat je verdergaat naar Google" [level=1]`);
});