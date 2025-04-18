import { BasePage } from './BasePage';
import { LoginPage } from "./LoginPage"

export class MainPage extends BasePage {
  private loginButtonSelector = '[data-test="login-button"]';

  async acceptCookies(){ 
    await this.page.getByRole('button', { name: 'Accept all' }).click();
  }

  async logInWithEmail() {
    await this.click(this.loginButtonSelector)
    return new LoginPage(this.page);
  }
}