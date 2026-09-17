import { expect, Page } from '@playwright/test';

export class PlaywrightHomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }

  async expectTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}
