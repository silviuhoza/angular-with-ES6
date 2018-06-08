import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'

class AdminLoginController {
    constructor() {
        this.componentName = '  Silviu Hoza  ';
        this.componentCss  = 'Hello there I\'m the Css component';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
        console.log('hi there, I am', this.componentCss);
        
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminLoginComponent = {
    controller: AdminLoginController,
    controllerAs: '$ctrl',
    template,
    bindings
}
