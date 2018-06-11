import template from './phone-list.template.html';
import componentStyle from './phone-list.css';

class phoneListController {
    constructor(phoneService) {
        this.componentName = 'phoneListController';
        this.phoneService = phoneService;
    }

    $onInit() {
        this.phoneService.query().$promise.then((response) => {
            this.phones = response;
            this.phoneNames = this.showPhoneNames(response);
        });
    }

    showPhoneNames(phones) {
        let phonesNames;
        phonesNames = phones.map((phone) => {
            return phone.name;
        });

        return phonesNames;
    }
}

const bindings = {
    testString: '<',
}


const phoneListComponent = {
    controller: phoneListController,
    template,
    bindings
}

export default phoneListComponent;