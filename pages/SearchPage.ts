import { BasePage } from './BasePage';
import { PropertyMapPage } from './PropertyMapPage';

export class SearchPage extends BasePage {
  private propertyMapSelector = '[data-test="menu-propertyMap"]';
  private propertySearchInput = '[id="address_input"]';

  async goToPropertyMap(){    
    await this.click(this.propertyMapSelector)
    await this.page.waitForSelector('div:has-text("Filters")', { state: 'visible' });
    return new PropertyMapPage(this.page);
  }

  async searchForProperty(propertyName: string){
    await this.typeText(this.propertySearchInput, propertyName);
    await this.page.waitForSelector('div:has-text("Evra Analysis")', { state: 'visible' });
  } 
}