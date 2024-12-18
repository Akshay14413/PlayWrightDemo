export class PyramidCodeHomePage {

  constructor(page){
    this.page = page;

    //locators of login page
    this.homePageTopBar = page.locator('frame[name="top"]').contentFrame().getByRole('banner');
    this.homePage = page.locator('frame[name="contents"]').contentFrame().getByText('E-learning Dashboard Org');
    this.homePageSideMenu = page.locator('frame[name="main"]').contentFrame().locator('.slide');
    this.changePasswordButton = page.locator('frame[name="top"]').contentFrame().getByRole('link', { name: 'Change Password' });
    this.logoutButton = page.locator('frame[name="top"]').contentFrame().getByRole('link', { name: 'Logout' });
    //this.projectManagementLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Project Mgmt', exact: true });
    //page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Tickets', exact: true });
    //this.timesheetLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Timesheet', exact: true });
    //page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'My Timesheet' });
  }

  
    

}