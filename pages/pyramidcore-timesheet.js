export class PyramidCoreTimeSheetPage {

    constructor(page){
        this.page = page;

        this.copyFromLastWeekCheckbox = page.locator('frame[name="main"]').contentFrame().locator('div').filter({ hasText: /^Copy from last week$/ });
        this.projectColumn = page.locator('frame[name="main"]').contentFrame().getByText('Project', { exact: true });
        this.featureColumn = page.locator('frame[name="main"]').contentFrame().getByText('Feature');
        this.ticketNoColumn = page.locator('frame[name="main"]').contentFrame().getByText('Ticket No*');
        this.groupColumn = page.locator('frame[name="main"]').contentFrame().getByText('Group*');
        this.activityColumn = page.locator('frame[name="main"]').contentFrame().getByText('Activity*');

        this.timeSheetLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Timesheet', exact: true });
        this.myTimesheetLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'My Timesheet' });
        this.ticketNoTextbox = page.locator('frame[name="main"]').contentFrame().getByRole('textbox', { name: 'Click to view ticket options' });
        this.ticketsPopUp = page.locator('frame[name="main"]').contentFrame().locator('.ag-cell-value > div').first();
        this.groupDropdown = page.locator('frame[name="main"]').contentFrame().locator('#selectedGroup').nth(2);
        this.activityDropddown = page.locator('frame[name="main"]').contentFrame().locator('#selectedActivity').nth(2);
        this.timeSlot1 = page.locator('frame[name="main"]').contentFrame().locator('div:nth-child(6) > .maincontnet1 > .ticketnumber > div > div > #selectedHour').first();
        this.timeSlot2 = page.locator('frame[name="main"]').contentFrame().locator('div:nth-child(6) > .maincontnet1 > .ticketnumber > div:nth-child(2) > div > #selectedHour');
        this.timeSlot3 = page.locator('frame[name="main"]').contentFrame().locator('div:nth-child(6) > .maincontnet1 > .ticketnumber > div:nth-child(3) > div > #selectedHour');
        this.timeSlot4 = page.locator('frame[name="main"]').contentFrame().locator('div:nth-child(6) > .maincontnet1 > .ticketnumber > div:nth-child(4) > div > #selectedHour');
        this.timeSlot5 = page.locator('frame[name="main"]').contentFrame().locator('div:nth-child(6) > .maincontnet1 > .ticketnumber > div:nth-child(5) > div > #selectedHour');
        this.saveButton = page.locator('frame[name="main"]').contentFrame().getByRole('button', { name: 'Save' });
        this.savedSuccessPopUp = page.locator('frame[name="main"]').contentFrame().locator('notifier-notification');
    }

    async navigateToTimeSheetPage(){
        await this.timeSheetLink.click();
        await this.myTimesheetLink.click();
    }

    async fillAndSaveTimeSheetDetails(groupValue, activityValue){
        await this.ticketNoTextbox.click();
        await this.ticketsPopUp.click();
        await this.groupDropdown.selectOption(groupValue); 
        await this.activityDropddown.selectOption(activityValue);
        await this.timeSlot1.selectOption('8'); 
        await this.timeSlot2.selectOption('8'); 
        await this.timeSlot3.selectOption('8'); 
        await this.timeSlot4.selectOption('8'); 
        await this.timeSlot5.selectOption('8'); 
        await this.saveButton 
    }
}