import { test, expect } from '@playwright/test';
import {PyramidCoreLoginPage} from '../pages/pyramidcore-login';
import {PyramidCodeHomePage} from '../pages/pyramidcore-home';
import {PyramidCoreTicketPage} from '../pages/pyramidcore-assigntickets';


let page = '';
let pyramidCoreLoginPageObj;
let pyramidCoreHomePageObj;
let pyramidCoreTicketPageObj;
const loginCred = JSON.parse(JSON.stringify(require('../testdata/pyramidcoreCred.json')));
const assignTicketDetails = JSON.parse(JSON.stringify(require('../testdata/assignTicketData.json')));
test.describe('ticket page test', ()=>{

    test.beforeAll(async ({browser})=>{
        const context = await browser.newContext();
        page = await context.newPage();
        pyramidCoreLoginPageObj = new PyramidCoreLoginPage(page);
        pyramidCoreHomePageObj = new PyramidCodeHomePage(page);
        pyramidCoreTicketPageObj = new PyramidCoreTicketPage(page);
    });

    test.afterAll(async ()=>{
        page.close();
    });

    test('verify timesheet page functionality', async () =>{

        //Launch Application
        await pyramidCoreLoginPageObj.navigateToPyramidCore();
        //Validate URL of Application
        await expect(page).toHaveURL('https://pyramidcore.pyramidci.com/security/PCILoginNew.aspx');
        //Login into Application
        await pyramidCoreLoginPageObj.navigateToHomePage(loginCred.username,loginCred.password);
        
        //Validate Home Page is displayed with below fields
        await expect(pyramidCoreHomePageObj.homePageTopBar).toBeVisible();
        await expect(pyramidCoreHomePageObj.homePage).toBeVisible();
        await expect(pyramidCoreHomePageObj.homePageSideMenu).toBeVisible();
        await expect(pyramidCoreHomePageObj.changePasswordButton).toBeVisible();
        await expect(pyramidCoreHomePageObj.logoutButton).toBeVisible();
        await expect(pyramidCoreTicketPageObj.projectManagementLink).toBeVisible();

        //Navigate to Tickets page
        await pyramidCoreTicketPageObj.navigateToTicketsPage();

        //Validate Tickets Page is displayed
        await expect(pyramidCoreTicketPageObj.assignTicketHeading).toBeVisible();

        //Fill the details
        await pyramidCoreTicketPageObj.createATicket(assignTicketDetails.masterProject, assignTicketDetails.project, assignTicketDetails.feature, assignTicketDetails.ticketId, assignTicketDetails.ticketDescription, assignTicketDetails.complexity, assignTicketDetails.priority, assignTicketDetails.assignedUser, assignTicketDetails.dueDateYear, assignTicketDetails.dueDateMonth, assignTicketDetails.dueDate);
   
    })
})