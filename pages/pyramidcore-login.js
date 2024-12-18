export class PyramidCoreLoginPage {

    constructor(page){
        this.page = page;

        //locators of login page
        this.pyramidCoreHeadingImage = page.locator('.logortbck');
        this.emailIdTextBox = page.getByPlaceholder('User Id / Official Email Id');
        this.passwordTextBox = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#pydLogin_btnLogin');
        this.ssoLoginButton = page.locator('#pydLogin_lnkBtnSSOLogin');
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' });
    }

    async navigateToPyramidCore(page){
       await this.page.goto('https://pyramidcore.pyramidci.com/');
    }

    async navigateToHomePage(userId, password){
        await this.emailIdTextBox.fill(userId);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}

