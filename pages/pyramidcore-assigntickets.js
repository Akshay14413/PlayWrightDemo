export class PyramidCoreTicketPage {

    constructor(page){
        this.page = page;

        this.projectManagementLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Project Mgmt', exact: true });
        this.ticketsLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Tickets', exact: true });
        this.assignLink = page.locator('frame[name="contents"]').contentFrame().getByRole('link', { name: 'Assign' });
        
        this.mainFrame = page.locator('frame[name="main"]');
        this.assignTicketHeading = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').getByRole('cell', { name: 'Assign Ticket' });
        this.masterProjectDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlMasterProject');
        this.projectDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlProject');
        this.featureDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlFeatures');
        this.ticketIdTextbox = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('#txtTicketId');
        this.ticketDescriptionTextbox = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('#txtTicketDcpn');
        this.complexityDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlComplexity');
        this.priorityDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlPriority');
        this.AssignedUserDropdown = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('select#ddlAssigneduser');
        this.dueDateCalenderButton = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').getByRole('img', { name: 'Select from date' });
        this.dueDate = (dateValue)=> this.mainFrame.contentFrame().locator('form#frmAssignedDetail').getByRole('link', { name: dateValue }).click();
        this.dueYear = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('#ui-datepicker-div').locator('select.ui-datepicker-year');
        this.dueMonth = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').locator('#ui-datepicker-div').locator('select.ui-datepicker-month');
        this.saveButton = this.mainFrame.contentFrame().locator('form#frmAssignedDetail').getByRole('button', { name: 'Save' });

        /* this.assignTicketHeading = page.locator('frame[name="main"]').contentFrame().getByRole('cell', { name: 'Assign Ticket' });
        this.masterProjectDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlMasterProject');
        this.projectDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlProject');
        this.featureDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlFeatures');
        this.ticketIdTextbox = page.locator('frame[name="main"]').contentFrame().locator('#txtTicketId');
        this.ticketDescriptionTextbox = page.locator('frame[name="main"]').contentFrame().locator('#txtTicketDcpn');
        this.complexityDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlComplexity');
        this.priorityDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlPriority');
        this.AssignedUserDropdown = page.locator('frame[name="main"]').contentFrame().locator('select#ddlAssigneduser');
        this.dueDateCalenderButton = page.locator('frame[name="main"]').contentFrame().getByRole('img', { name: 'Select from date' });
        this.dueDate = (dateValue)=> page.locator('frame[name="main"]').contentFrame().getByRole('link', { name: dateValue }).click();
        this.dueYear = page.locator('frame[name="main"]').contentFrame().locator('#ui-datepicker-div').locator('select.ui-datepicker-year');
        this.dueMonth = page.locator('frame[name="main"]').contentFrame().locator('#ui-datepicker-div').locator('select.ui-datepicker-month');
        this.saveButton = page.locator('frame[name="main"]').contentFrame().getByRole('button', { name: 'Save' }); */
    }

    async navigateToTicketsPage(){
        await this.projectManagementLink.click();
        await this.ticketsLink.click();
        await this.assignLink.click();
    }

    async createATicket(masterProject, project, feature, ticketId, ticketDescription, complexity, priority, assignedUser, dueDateYear, dueDateMonth, dueDate){
        //this.page.pause();
        await this.masterProjectDropdown.selectOption(masterProject);
        await this.projectDropdown.selectOption(project);
        await this.featureDropdown.selectOption(feature);
        await this.ticketIdTextbox.fill(ticketId);
        await this.ticketDescriptionTextbox.fill(ticketDescription);
        await this.complexityDropdown.selectOption(complexity);
        await this.priorityDropdown.selectOption(priority);
        await this.AssignedUserDropdown.selectOption(assignedUser);
        await this.dueDateCalenderButton.click();
        await this.projectDropdown.selectOption(dueDateYear);
        await this.projectDropdown.selectOption(dueDateMonth);
        await this.dueDate(dueDate).click();
        await this.saveButton.click();
    }
}