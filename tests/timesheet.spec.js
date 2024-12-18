import { test, expect } from '@playwright/test';
import {PyramidCoreLoginPage} from '../pages/pyramidcore-login';
import {PyramidCoreTimeSheetPage} from '../pages/pyramidcore-timesheet';
import {PyramidCodeHomePage} from '../pages/pyramidcore-home';

let page = '';
let pyramidCoreLoginPageObj;
let pyramidCoreTimesheetPAgeObj;
let pyramidCoreHomePageObj;
const loginCred = JSON.parse(JSON.stringify(require('../testdata/pyramidcoreCred.json')));
const timesheetTestdata = JSON.parse(JSON.stringify(require('../testdata/timeSheetData.json')));
test.describe('timesheet page test', ()=>{

    test.beforeAll(async ({browser})=>{
        const context = await browser.newContext();
        page = await context.newPage();
        pyramidCoreLoginPageObj = new PyramidCoreLoginPage(page);
        pyramidCoreHomePageObj = new PyramidCodeHomePage(page);
        pyramidCoreTimesheetPAgeObj = new PyramidCoreTimeSheetPage(page);
    });

    test.afterAll(async ()=>{
        page.close();
    });

    test('verify timesheet page functionality', async () =>{

        
        await pyramidCoreLoginPageObj.navigateToPyramidCore();

        await pyramidCoreLoginPageObj.navigateToHomePage(loginCred.username,loginCred.password);

        //Validate Home Page is displayed with below fields
        await expect(pyramidCoreHomePageObj.homePageTopBar).toBeVisible();
        await expect(pyramidCoreHomePageObj.homePage).toBeVisible();
        await expect(pyramidCoreHomePageObj.homePageSideMenu).toBeVisible();
        await expect(pyramidCoreHomePageObj.changePasswordButton).toBeVisible();
        await expect(pyramidCoreHomePageObj.logoutButton).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.timeSheetLink).toBeVisible();

        await pyramidCoreTimesheetPAgeObj.navigateToTimeSheetPage();

        //await expect(pyramidCoreTimesheetPAgeObj.copyFromLastWeekCheckbox).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.projectColumn).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.featureColumn).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.ticketNoColumn).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.groupColumn).toBeVisible();
        await expect(pyramidCoreTimesheetPAgeObj.activityColumn).toBeVisible();

        await pyramidCoreTimesheetPAgeObj.fillAndSaveTimeSheetDetails(timesheetTestdata.group,timesheetTestdata.activity);

        await expect(pyramidCoreTimesheetPAgeObj.savedSuccessPopUp).toBeVisible();
    })
})