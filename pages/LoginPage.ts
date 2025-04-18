import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private login = '[name="identifier"]';
  private next = '[class="button button-primary"]';
  private password = '[name="credentials.passcode"]';

  async logIn(login: string, password: string) {
    await this.typeText(this.login, login)
    await this.click(this.next)
    await this.typeText(this.password, password)
    await this.click(this.next);
    await this.page.waitForSelector('a:has-text("Property Due Diligence")', { state: 'visible' });
  }
}