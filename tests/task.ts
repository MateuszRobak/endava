import {test} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SearchPage } from '../pages/SearchPage';

test.describe('User login tests', () => {  

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const mainPage = new MainPage(page);
    await mainPage.acceptCookies();
    const loginPage = await mainPage.logInWithEmail();
    await loginPage.logIn("mateusz.robak90@gmail.com", "Test1234!");
  });

  test('Verify property map unit fields', async ({ page }) => {
    const searchPage = new SearchPage(page)    
    const propertyMapPage = await searchPage.goToPropertyMap()
    propertyMapPage.setMaximumUnits("1");    
    propertyMapPage.setMinimumUnits("1");    

    propertyMapPage.assertMinimumUnits();
    propertyMapPage.assertMaximumUnits();
    propertyMapPage.assertMinimumMustBeLessOrEqualToMaximum();
  });


  test('Test integration map', async ({ page }) => {
    const searchPage = new SearchPage(page)    
    searchPage.searchForProperty("633 E Archwood Dr, Eagle Point, OR 97524, USA")

  });
});