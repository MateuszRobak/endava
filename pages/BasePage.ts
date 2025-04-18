import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(selector: string) {
    this.waitForSelectorVisible(selector)
    await this.page.click(selector);
  }

  async typeText(selector: string, text: string) {
    await this.waitForSelectorVisible(selector)
    await this.page.fill(selector, text);
  }

  async waitForSelectorVisible(selector: string){ 
    await this.page.waitForSelector(selector, { state: 'visible' });
  }
}