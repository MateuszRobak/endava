import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PropertyMapPage extends BasePage {
  private minimumUnitsInput = '[data-test="Units-minimum"]';
  private maximumUnitsInput = '[data-test="Units-maximum"]';
  private minimumGreaterThanText = '[data-test="minimum-greater-than"]';
  private maximumGreaterThanText = '[data-test="maximum-greater-than"]';
  private minimumLestOrEqualToMaximumText = '[data-test="min-less-than-max"]';

  async setMinimumUnits(value: string){
    await expect(this.page.locator(this.minimumUnitsInput)).toBeVisible()  
    await this.typeText(this.minimumUnitsInput, value)
    await expect(this.page.locator(this.minimumUnitsInput)).toHaveValue(value)
  } 

  async setMaximumUnits(value: string){
    await expect(this.page.locator(this.maximumUnitsInput)).toBeVisible()  
    await this.typeText(this.maximumUnitsInput, value)    
    await expect(this.page.locator(this.maximumUnitsInput)).toHaveValue(value)
  } 

  async assertMinimumUnits(){
    const locator = this.page.locator(this.minimumGreaterThanText);
    await expect(locator).toBeVisible()    
    await expect(locator).toHaveText("Minimum must be greater than or equal to 5")    
  }  

  async assertMaximumUnits(){
    const locator = this.page.locator(this.maximumGreaterThanText);
    await this.waitForSelectorVisible(this.maximumGreaterThanText)
    await expect(locator).toHaveText("Maximum must be greater than or equal to 5")    
  }  

  async assertMinimumMustBeLessOrEqualToMaximum(){
    const locator = this.page.locator(this.minimumLestOrEqualToMaximumText);
    await this.waitForSelectorVisible(this.minimumLestOrEqualToMaximumText)
    await expect(locator).toHaveText("Minimum must be less than or equal to maximum.")    
  }  
}